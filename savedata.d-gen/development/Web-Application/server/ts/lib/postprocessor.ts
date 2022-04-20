import { IncomingMessage } from "http";

export function ProcessPost(req: IncomingMessage): any {

    var body = '';

    return new Promise(resolve => {
       


        req.on('data', function (resdata) {
            body += resdata;
            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6){
                req.connection.destroy();
                resolve(false);
            }
        });

        req.on('end', () => {

            try {
               

                var post = JSON.parse(body);
                resolve(post);

            } catch (error) {
                resolve(false);
            }
        });

    });
}

// june 21 2018