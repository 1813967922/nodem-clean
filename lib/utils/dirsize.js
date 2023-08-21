const fs = require("fs/promises");
const path = require("path");
/**
 * 计算该文件夹的大小
 * @param {string} dirPath 文件夹路径
 * @returns 文件夹大小
 */
async function dirSize(dirPath) {
  let totalSize = 0;

  let children;
  try {
    children = await fs.readdir(dirPath);
  } catch (e) {
    return;
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    const childPath = path.join(dirPath, child);
    const res = await fs.lstat(childPath);

    if (await res.isSymbolicLink()) {
      break;
    }

    if (res.isDirectory()) {
      totalSize += await dirSize(childPath);
    } else {
      totalSize += res.size;
    }
  }
  return totalSize;
}

module.exports = dirSize;
