const path = require('path');
const dotEnvConfigs = {
    path: path.resolve(process.cwd(), '.env'),
};
require('@babel/register');
require('@babel/polyfill');
require('dotenv').config(dotEnvConfigs);
require("colors")
require("./server")
require("../connector/mongo/init/toLocal")
require("../connector/redis/client")
