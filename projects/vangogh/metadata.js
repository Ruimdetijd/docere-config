"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractMetadata = function extractMetadata(doc) {
    const metadata = {};
    const selectors = [
        '//dummy:author',
        '//vg:addressee',
        '//vg:letContents',
        '//vg:placeLet',
        '//vg:dateLet',
        "//dummy:note[@type='location']",
        "//dummy:note[@type='sourceStatus']",
        "//dummy:note[@type='date']",
    ];
    function nsResolver(prefix) {
        return prefix === 'vg' ? "http://www.vangoghletters.org/ns/" : "http://www.tei-c.org/ns/1.0";
    }
    selectors.forEach(selector => {
        const metadataRoot = doc.querySelector('sourceDesc');
        const iterator = doc.evaluate(selector, metadataRoot, nsResolver, XPathResult.ANY_TYPE, null);
        const el = iterator.iterateNext();
        if (el) {
            let key;
            const re = /\/\/\w+:\w+\[@\w+='(\w+)'\]/;
            if (re.test(selector)) {
                [, key] = re.exec(selector);
            }
            else {
                const re2 = /\/\/\w+:(\w+)/;
                [, key] = re2.exec(selector);
            }
            metadata[key.toLowerCase()] = el.textContent;
        }
        else {
            console.log(`Selector not found: ${selector}`);
        }
    });
    return metadata;
};
exports.default = extractMetadata;
