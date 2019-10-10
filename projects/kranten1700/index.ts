import config from './config'
import extractMetadata from './metadata'
import prepareDocument from './prepare'
import { extendConfigData } from 'docere'

const docereConfigDataRaw: DocereConfigDataRaw = {
	config,
	extractMetadata,
	prepareDocument,
}

export default extendConfigData(docereConfigDataRaw)
