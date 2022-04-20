"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessPost = void 0;
function ProcessPost(req) {
    var body = '';
    return new Promise(resolve => {
        req.on('data', function (resdata) {
            body += resdata;
            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) {
                req.connection.destroy();
                resolve(false);
            }
        });
        req.on('end', () => {
            try {
                var post = JSON.parse(body);
                resolve(post);
            }
            catch (error) {
                resolve(false);
            }
        });
    });
}
exports.ProcessPost = ProcessPost;
// june 21 2018
//# sourceMappingURL=postprocessor.js.map