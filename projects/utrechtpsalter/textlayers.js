"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractTextLayers = function extractTextLayers(doc) {
    return Array.from(doc.querySelectorAll('transcription'))
        .reduce((prev, curr) => {
        prev[curr.querySelector('lang').textContent] = curr;
        return prev;
    }, {});
};
exports.default = extractTextLayers;
