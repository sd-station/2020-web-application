export class HtmlFormat {
    format(html) {
        var tab = '    ';
        var result = '';
        var indent = '';
        var exception = ["input", "img", "area", "base", "br", "col", "embed", "hr", "link", "meta", "param", "source", "track", "wbr",];
        html.split(/>\s*</).forEach(function (element) {
            if (element.match(/^\/\w/)) {
                indent = indent.substring(tab.length);
            }
            result += indent + '<' + element + '>\r\n';
            if (element.match(/^<?\w[^>]*[^\/]$/) && exception.every(k => !element.startsWith(k))) {
                indent += tab;
            }
        });
        return result.substring(1, result.length - 3);
    }
}
//# sourceMappingURL=html-format.js.map