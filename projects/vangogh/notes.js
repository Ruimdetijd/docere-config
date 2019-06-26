function toExtractedNote(el) {
    return {
        n: el.getAttribute('n'),
        el
    };
}
const extractNotes = function extractNotes(doc) {
    return {
        textualNotes: Array.from(doc.querySelectorAll('div[type="textualNotes"] > note')).map(toExtractedNote),
        editorNotes: Array.from(doc.querySelectorAll('div[type="notes"] > note')).map(toExtractedNote),
    };
};
export default extractNotes;
