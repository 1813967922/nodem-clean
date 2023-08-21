const fs = require("fs/promises");
/**
 * 判断文件是否存在
 * @param {string} filePath 文件路径
 * @returns 存在返回真否则假
 */
async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = fileExists;
