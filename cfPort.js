var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();

const PORT = appEnv.port

console.log(PORT)
