const fs = require("fs/promises");
const path = require("path");
const dirSize = require("./dirsize");

/**
 * 递归查询所有包含名为 searchName 的文件夹路径
 * @param {*} dirPath 初始查询路径
 * @param {*} searchName 要查询的文件夹名
 * @param {*} foundDirs 查询到后存入的数组
 */
async function searchDir(dirPath, searchName, foundDirs) {
  const children = await fs.readdir(dirPath);
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    const childPath = path.join(dirPath, child);
    const res = await fs.lstat(childPath);
    if (await res.isSymbolicLink()) {
      break;
    }
    if (res.isDirectory() && !child.startsWith(".")) {
      if (child === "node_modules") {
        const dirsize = await dirSize(childPath);
        foundDirs.push({ path: childPath, size: dirsize });
      } else {
        await searchDir(childPath, searchName, foundDirs);
      }
    }
  }
}
module.exports = searchDir;
