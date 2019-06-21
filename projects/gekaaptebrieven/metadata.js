const extractMetadata = function extractMetadata(doc) {
    const selector = "meta";
    let els = doc.querySelectorAll(selector);
    const metadata = {};
    Array.from(els).forEach(el => {
        metadata[el.getAttribute('type')] = el.getAttribute('value');
    });
    metadata.has_date = metadata.hasOwnProperty('date') && metadata.date !== '' && metadata.date != null;
    const persons = []
        .concat(metadata.sender, metadata.recipient)
        .filter(p => p != null);
    metadata.sender_or_recipient = persons;
    function split(key) {
        const values = metadata[key].split(/;|\//).map(part => part.trim());
        metadata[key] = [...new Set(values)];
    }
    split('texttypes');
    split('languages');
    return metadata;
};
export default extractMetadata;
