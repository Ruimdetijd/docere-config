"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractFacsimiles = function extractFacsimiles(doc) {
    return Array.from(doc.querySelectorAll('pb'))
        .map(graphic => {
        const fileName = graphic.getAttribute('facs');
        if (fileName == null)
            return null;
        const path = `http://localhost:5004/ode/${fileName.toLowerCase()}/info.json`;
        return { id: fileName, path: [path] };
    })
        .filter(ef => ef != null);
};
exports.default = extractFacsimiles;
