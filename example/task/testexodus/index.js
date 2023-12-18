
    const axios = require("axios");
    axios.post(
        "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=undefined",
        {
            "msgtype": "markdown",
            "markdown": {
                "content": `undefined`
            }
        },
        function(err, response, data) {
            console.log('执行成功');
        }
    );
    