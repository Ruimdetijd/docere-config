import * as React from 'react';
import { constants, components } from 'docere';
import styled from '@emotion/styled';
const getPb = components.getPb;
const getComponents = function (config) {
    const placeConfig = config.textdata.find(td => td.id === 'loc');
    const personConfig = config.textdata.find(td => td.id === 'person');
    const components2 = {
        'ner[type="loc"]': components.rsPlace(placeConfig),
        'ner[type="per"]': components.rsPerson(personConfig),
        pb: getPb((props) => props.facs),
    };
    config.textdata
        .filter(td => td.id !== 'person' && td.id !== 'loc')
        .forEach(td => {
        components2[td.extractor.selector] = function (props) {
            return (React.createElement(components.Rs, Object.assign({}, props, { active: props.activeListId === td.id && props.activeId === props.children[0], color: td.color, onClick: () => props.setActiveId(props.children[0], td.id, constants.AsideTab.TextData) })));
        };
    });
    return {
        pb: getPb((props) => props.facs),
        ner: styled.div `color: blue;`
    };
};
export default getComponents;
