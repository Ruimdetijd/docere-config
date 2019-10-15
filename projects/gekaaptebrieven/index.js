"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const metadata_1 = require("./metadata");
const facsimiles_1 = require("./facsimiles");
const prepare_1 = require("./prepare");
const components_1 = require("./components");
const docere_1 = require("docere");
const docereConfigDataRaw = {
    config: config_1.default,
    getComponents: components_1.default,
    extractMetadata: metadata_1.default,
    extractFacsimiles: facsimiles_1.default,
    prepareDocument: prepare_1.default
};
exports.default = docere_1.extendConfigData(docereConfigDataRaw);
