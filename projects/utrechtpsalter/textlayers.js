const extractTextLayers = function extractTextLayers(doc) {
    return Array.from(doc.querySelectorAll('transcription'))
        .reduce((prev, curr) => {
        prev[curr.querySelector('lang').textContent] = curr;
        return prev;
    }, {});
};
export default extractTextLayers;
