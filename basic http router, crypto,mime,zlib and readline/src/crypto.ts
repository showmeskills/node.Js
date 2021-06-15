import crypto from "crypto";
const pwd = "abc123 456";

const hash = crypto
    .createHash("sha1")//定义算法 sha1,md5
    .update(pwd,"utf8")//修改pwd
    .digest('hex')//以16进制

    console.log(hash);