"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const textlayers_1 = require("./textlayers");
const docere_1 = require("docere");
const docereConfigDataRaw = {
    config: config_1.default,
    extractTextLayers: textlayers_1.default
};
exports.default = docere_1.extendConfigData(docereConfigDataRaw);
