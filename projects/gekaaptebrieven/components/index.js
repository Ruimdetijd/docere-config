"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const docere_1 = require("docere");
const getPb = docere_1.components.getPb;
const getComponents = function (config) {
    const placeConfig = config.textdata.find(td => td.id === 'loc');
    const personConfig = config.textdata.find(td => td.id === 'person');
    const components2 = {
        'ner[type="loc"]': docere_1.components.rsPlace(placeConfig),
        'ner[type="per"]': docere_1.components.rsPerson(personConfig),
        pb: getPb((props) => props.facs),
    };
    config.textdata
        .filter(td => td.id !== 'person' && td.id !== 'loc')
        .forEach(td => {
        components2[td.extractor.selector] = function (props) {
            return (React.createElement(docere_1.components.Rs, Object.assign({}, props, { active: props.activeListId === td.id && props.activeId === props.children[0], color: td.color, onClick: () => props.setActiveId(props.children[0], td.id, docere_1.constants.AsideTab.TextData) })));
        };
    });
    return components2;
};
exports.default = getComponents;
