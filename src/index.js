const spawn = require("./spawn").spawn;

!async function exec() {

    console.log("Bootstrapping ScreenCloud Ops Environment")

    await spawn("npm", ["install", "-g", "@screencloud/ops-cli@1.1.0-beta.2"])
    await spawn("npm", ["install", "-g", "semantic-release"])
    await spawn("npm", ["install", "-g", "@semantic-release/exec"])
    await spawn("npm", ["install", "-g", "@screencloud/publish-package"])
    await spawn("npm", ["install", "-g", "@screencloud/finalize-build-cli"])

}()
