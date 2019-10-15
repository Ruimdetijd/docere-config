"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractMetadata = function extractMetadata(doc) {
    const selectors = [
        'country', 'settlement', 'institution', 'repository', 'idno'
    ];
    const metadata = {};
    selectors.forEach(selector => {
        const node = doc.querySelector(`sourceDesc ${selector}`);
        metadata[selector] = node.textContent;
    });
    return metadata;
};
exports.default = extractMetadata;
