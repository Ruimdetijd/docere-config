import config from './config'
import extractFacsimiles from './facsimiles'
import { extendConfigData } from 'docere'

const docereConfigDataRaw: DocereConfigDataRaw = {
	config,
	extractFacsimiles,
}

export default extendConfigData(docereConfigDataRaw)
