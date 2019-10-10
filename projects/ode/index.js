import config from './config';
import extractFacsimiles from './facsimiles';
import extractMetadata from './metadata';
import { extendConfigData } from 'docere';
const docereConfigDataRaw = {
    config,
    extractFacsimiles,
    extractMetadata,
};
export default extendConfigData(docereConfigDataRaw);
