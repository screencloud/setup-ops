/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 90:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const spawn_process = (__nccwpck_require__(317).spawn)

module.exports = {
    spawn: function spawn(cmd, args, opts) {
        try {
            return new Promise((resolve, reject) => {

                const child = spawn_process(cmd, args, {...opts, shell: true});

                child.stdout.setEncoding("utf-8");
                child.stdout.on("data", (data) => {
                    console.log(data);
                });

                child.stderr.setEncoding("utf-8");
                child.stderr.on("data", (data) => {
                    if (typeof data === "string") {
                        const tempData = data.split(/\r?\n/)
                        tempData.forEach((line) => {
                            console.error(line);
                        })
                    } else {
                        console.error(data);
                    }
                })

                child.on("close", (exitCode) => {
                    if(exitCode !== 0) {
                        return reject({exitCode: exitCode});
                    }

                    resolve(exitCode);
                });

            });
        } catch (error) {
            return error;
        }
    }
}


/***/ }),

/***/ 317:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const spawn = (__nccwpck_require__(90).spawn);

!async function exec() {

    console.log("Bootstrapping ScreenCloud Ops Environment")
    await spawn("node", ["-v"])
    await spawn("npm", ["install", "-g", "@screencloud/ops-cli@1.1.0-beta.25"])
    await spawn("npm", ["install", "-g", "semantic-release"])
    await spawn("npm", ["install", "-g", "@semantic-release/exec"])
    await spawn("npm", ["install", "-g", "@screencloud/publish-package"])
    await spawn("npm", ["install", "-g", "@screencloud/finalize-build-cli"])

}()
 
module.exports = __webpack_exports__;
/******/ })()
;