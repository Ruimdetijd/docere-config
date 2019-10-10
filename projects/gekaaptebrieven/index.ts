import config from './config'
import extractMetadata from './metadata'
import extractFacsimiles from './facsimiles'
import prepareDocument from './prepare'
import getComponents from './components'
import { extendConfigData } from 'docere'

const docereConfigDataRaw: DocereConfigDataRaw = {
	config,
	getComponents,
	extractMetadata,
	extractFacsimiles,
	prepareDocument
}

export default extendConfigData(docereConfigDataRaw)
