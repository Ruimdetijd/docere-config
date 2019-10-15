"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const facsimiles_1 = require("./facsimiles");
const docere_1 = require("docere");
const docereConfigDataRaw = {
    config: config_1.default,
    extractFacsimiles: facsimiles_1.default,
};
exports.default = docere_1.extendConfigData(docereConfigDataRaw);
