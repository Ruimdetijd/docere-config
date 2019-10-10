import config from './config';
import extractFacsimiles from './facsimiles';
import { extendConfigData } from 'docere';
const docereConfigDataRaw = {
    config,
    extractFacsimiles,
};
export default extendConfigData(docereConfigDataRaw);
