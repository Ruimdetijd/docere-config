"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractFacsimiles = function extractFacsimiles(doc) {
    return Array.from(doc.querySelectorAll('facsimile zone'))
        .map(zone => {
        const id = zone.getAttribute('xml:id');
        const graphic = zone.querySelector('graphic[rend="facstab"]');
        if (graphic == null) {
            console.log(`Graphic not found: ${id}`);
            return null;
        }
        const fileName = graphic.getAttribute('url').slice(0, -5).concat('t.jpg');
        const path = `http://vangoghletters.org/vg/facsimiles/${fileName}`;
        return { id, path: [path] };
    })
        .filter(facs => facs != null);
};
exports.default = extractFacsimiles;
