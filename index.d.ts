/// <reference path="types.d.ts" />
export declare const defaultMetadata: MetaDataConfig;
export declare function extendConfig(config: DocereConfig): DocereConfig;
declare const defaultDocereFunctions: Pick<DocereConfigData, 'prepareDocument' | 'extractFacsimiles' | 'extractMetadata' | 'extractNotes' | 'extractTextData'>;
export default defaultDocereFunctions;
