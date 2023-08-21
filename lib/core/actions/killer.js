const formpath = require("../../utils/formpath");
const searchdir = require("../../utils/searchdir");
const removefileordir = require("../../utils/removefileordir");

/**
 * 初始查询路径
 * @param {string} path 
 */
async function killerAction(path) {
  const foundDirs = [];
  const newPath = formpath(path);
  await searchdir(newPath, "node_modules", foundDirs);
  await removefileordir(foundDirs);
}

module.exports = killerAction;
