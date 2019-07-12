const extractFacsimiles = function extractFacsimiles(doc) {
    return Array.from(doc.querySelectorAll('facsimile zone'))
        .map(zone => {
        const id = zone.getAttribute('xml:id');
        const graphic = zone.querySelector('graphic[rend="norend"]');
        if (graphic == null) {
            console.log(`Graphic not found: ${id}`);
            return null;
        }
        const path = graphic.getAttribute('url');
        return { id, path: [path] };
    })
        .filter(facs => facs != null);
};
export default extractFacsimiles;
