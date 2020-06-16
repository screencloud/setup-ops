module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(676);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 129:
/***/ (function(module) {

module.exports = require("child_process");

/***/ }),

/***/ 473:
/***/ (function(module, __unusedexports, __webpack_require__) {

const spawn_process = __webpack_require__(129).spawn

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

/***/ 676:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const spawn = __webpack_require__(473).spawn;

!async function exec() {

    console.log("Bootstrapping ScreenCloud Ops Environment")

    await spawn("npm", ["install", "-g", "@screencloud/ops-cli"])
    await spawn("npm", ["install", "-g", "semantic-release"])
    await spawn("npm", ["install", "-g", "@semantic-release/exec"])
    await spawn("npm", ["install", "--save-dev", "@screencloud/publish-package"])

}()


/***/ })

/******/ });