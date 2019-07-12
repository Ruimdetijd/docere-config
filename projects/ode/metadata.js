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
export default extractMetadata;
