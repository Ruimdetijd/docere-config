import config from './config';
import extractMetadata from './metadata';
import extractNotes from './notes';
import extractFacsimiles from './facsimiles';
import { extendConfigData } from 'docere';
const docereConfigDataRaw = {
    config,
    extractMetadata,
    extractNotes,
    extractFacsimiles,
};
export default extendConfigData(docereConfigDataRaw);
