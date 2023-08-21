const fs = require("fs/promises");
const fileExists = require("./fileexists");
/**
 * 删除该文件或文件夹
 * @param {{path:string,size:number}} dirs
 */
async function removeFileOrDir(dirs) {
  for (let i = 0; i < dirs.length; i++) {
    const { path } = dirs[i];
    if (await fileExists(path)) {
      await fs.rm(path, { recursive: true });
    }
  }
}

module.exports = removeFileOrDir;
