const fs = require("node:fs");
/**
 * 判断路径是否存在
 */
module.exports = (path) => {
  let newPath = "";
  if (path == ".") {
    newPath = process.cwd();
  } else if (fs.existsSync(path)) {
    newPath = path;
  } else {
    return new Error(`路径:${path}不存在,请重新输入`);
  }
  return newPath;
};
