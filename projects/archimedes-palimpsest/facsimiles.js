"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractFacsimiles = function extractFacsimiles(doc) {
    const path = Array.from(doc.querySelectorAll('facsimile graphic'))
        .map(graphic => {
        const id = graphic.getAttribute('url').replace(/\.tif$/, '');
        const path = `http://localhost:5004/archimedes-palimpsest/${id}.jpg/info.json`;
        return path;
    })
        .filter(facs => facs != null)
        .sort((a, b) => {
        if (a.indexOf('visible_stitch') > -1)
            return -1;
        if (b.indexOf('visible_stitch') > -1)
            return 1;
        return 0;
    });
    return [{
            id: 'test',
            path,
        }];
};
exports.default = extractFacsimiles;
