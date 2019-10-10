import config from './config';
import extractTextLayers from './textlayers';
import { extendConfigData } from 'docere';
const docereConfigDataRaw = {
    config,
    extractTextLayers
};
export default extendConfigData(docereConfigDataRaw);
