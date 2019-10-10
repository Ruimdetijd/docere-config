import config from './config';
import extractMetadata from './metadata';
import prepareDocument from './prepare';
import { extendConfigData } from 'docere';
const docereConfigDataRaw = {
    config,
    extractMetadata,
    prepareDocument,
};
export default extendConfigData(docereConfigDataRaw);
