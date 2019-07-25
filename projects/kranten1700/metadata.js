const extractMetadata = function extractMetadata(doc) {
    const selector = "meta";
    let els = doc.querySelectorAll(selector);
    const metadata = {};
    Array.from(els).forEach(el => {
        let id = el.getAttribute('id');
        if (id === 'id')
            id = 'docId';
        metadata[id] = el.textContent;
    });
    return metadata;
};
export default extractMetadata;
