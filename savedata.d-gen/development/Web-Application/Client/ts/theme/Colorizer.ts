 
export class Colorizer {

    Setup() {
        //>> Prism Test
        //@ts-ignore
        Prism.languages['mymarkdown'] = Prism.languages.extend('markdown', {

            // CSS doesn't have a 'color' token, so this token will be appended
            'field-color': /^\ +(form|input|textarea|select)\ /,
            'container-color': /^\ +(main|footer|header|section|div)\ /,
            'tag-color': /^\ +\w+\ /,
            'id-color': /\#((\w)|(\-))+/,
            'class-color': /\.((\w)|(\-))+/,
            'equal-color': {
                greedy: true,
                pattern: /(((\w)|(\-))+\=((\w)|(\-))+)|(((\w)|(\-))+\=\".+\")/,
                inside: {
                    "eq-key-word": /(\w|\-)+/
                }
            },


        });
    }
}
