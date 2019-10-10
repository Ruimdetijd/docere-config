import * as React from 'react'
import { constants, components } from 'docere'
import styled from '@emotion/styled';

const getPb = components.getPb

const getComponents: GetComponents = function(config) {
	const placeConfig = config.textdata.find(td => td.id === 'loc')
	const personConfig = config.textdata.find(td => td.id === 'person')

	const components2: DocereComponents = {
		'ner[type="loc"]': components.rsPlace(placeConfig),
		'ner[type="per"]': components.rsPerson(personConfig),
		pb: getPb((props) => props.facs),
	}

	// Map all the text data configs to components. Person and Loc are overwritten later
	config.textdata
		.filter(td => td.id !== 'person' && td.id !== 'loc')
		.forEach(td => {
			components2[td.extractor.selector] = function(props: any) {
				return (
					<components.Rs
						{...props}
						active={props.activeListId === td.id && props.activeId === props.children[0]}
						color={td.color}
						onClick={() => props.setActiveId(props.children[0], td.id, constants.AsideTab.TextData)}
					/>
				)
			}
		})

	return {
		pb: getPb((props) => props.facs),
		ner: styled.div`color: blue;`
	}
}

export default getComponents
