const spawn_process = require("child_process").spawn

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
