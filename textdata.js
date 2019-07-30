export default function extractTextData(doc, config) {
    if (!config.textdata)
        return {};
    return config.textdata.reduce((prev, curr) => {
        const items = {};
        prev[curr.id] = Array.from(doc.querySelectorAll(curr.extractor.selector))
            .reduce((prev, currEl) => {
            const key = curr.extractor.hasOwnProperty('idAttribute') ?
                currEl.getAttribute(curr.extractor.idAttribute) :
                currEl.textContent;
            const value = (curr.extractor.extractionType === "textcontent") ?
                currEl.textContent :
                key;
            if (items.hasOwnProperty(key)) {
                items[key].count = items[key].count + 1;
            }
            else {
                items[key] = { key, value, count: 1 };
                prev.push(items[key]);
            }
            return prev;
        }, []);
        return prev;
    }, {});
}
