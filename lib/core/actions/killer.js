const formpath = require("../../utils/formpath");
const searchdir = require("../../utils/searchdir");
const removefileordir = require("../../utils/removefileordir");
const ora = require("ora");
const chalk = require("chalk");

/**
 * 初始查询路径
 * @param {string} path
 */
async function killerAction(path) {
  const foundDirs = [];
  const newPath = formpath(path);
  const searchdirSpinner = ora().start("正在查找 node_modules 文件夹...... \n");
  await searchdir(newPath, "node_modules", foundDirs);
  foundDirs.forEach((dir) => {
    searchdirSpinner.info(chalk.blue(`找到文件夹 ${dir.path} 大小为 ${dir.size} kb`));
  });
  const removeSpinner = ora().start("正在删除文件夹...... \n");
  await removefileordir(foundDirs);
  removeSpinner.succeed("删除完成");
}

module.exports = killerAction;
