var { TFSchedule } = require("../src/index");
var scheHandle = new TFSchedule({
    backExecRecordNum: 1,
    mysqlConfig: {
        host: "47.96.162.246",
        port: "3306",
        user: "root",
        password: "123456",
        database: "db_schedule"
    },
    entryFile: "index.js", // 设置默认的入口文件
    command: "node", // 设置默认的执行器
    taskRootPath: __dirname + "/task",
    notifyList: "86wh2@163.com"
});
scheHandle.on("notify", function(notifyInfo) {
    var { type, title, content, notifyList } = notifyInfo;
    try {
        console.log(`告警信息\n${JSON.stringify(notifyInfo)}`);
        title = "TFSchedule批跑系统通知 " + title;
        content = content || "";
        if (process.env.NODE_ENV === "production") {
            notifySendRTX &&
                notifySendRTX({
                    title: title,
                    msg: content,
                    receiver: notifyList + ";wilsonsliu"
                });
        } else {
            console.log("notifyTaskRTX-本地开发环境，不发生警告");
        }
    } catch (e) {
        console.error("告警异常", e);
    }
});

function notifySendRTX() {
    // 通知函数
    console.log(arguments);
}
