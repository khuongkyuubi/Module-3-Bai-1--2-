// đọc nội dung file sử dụng cơ chế bất đồng bộ, non-blocking của nodejs
const fs = require("fs");
console.log("Start");

fs.readFile("./test.txt", "utf-8", function (err, data) {
    console.log(data);
})
console.log("End")