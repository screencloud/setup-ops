const spawn = require("./spawn").spawn;

!async function exec() {

    console.log("Bootstrapping ScreenCloud Ops Environment")

    await spawn("npm", ["install", "-g", "@screencloud/ops-cli"])
    await spawn("npm", ["install", "-g", "semantic-release"])
    await spawn("npm", ["install", "-g", "@semantic-release/exec"])
    await spawn("npm", ["i", "--save-dev", "@screencloud/publish-package"])

}()
