"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const metadata_1 = require("./metadata");
const prepare_1 = require("./prepare");
const docere_1 = require("docere");
const docereConfigDataRaw = {
    config: config_1.default,
    extractMetadata: metadata_1.default,
    prepareDocument: prepare_1.default,
};
exports.default = docere_1.extendConfigData(docereConfigDataRaw);
