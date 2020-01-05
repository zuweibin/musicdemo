const {recommendTable} = require("./recommendTable");
module.exports = {
    getRecommendData: function (req, res) {
        // eslint-disable-next-line no-console
        console.log("获取推荐数据被激活");
        recommendTable.find({}, {
            __v: false,
            _id: false
        }).then((data) => {
            // eslint-disable-next-line no-console
            console.log(data);
            res.send(JSON.stringify(data))
        }).catch((err) => {
            if (err) throw  err;
        })
    }
}