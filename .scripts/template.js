/*
 * @Author: yaodongyi
 * @Date: 2019-12-06 18:15:59
 * @Description: 页面快速生成脚本
 */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); // 提供多种彩印api
const basePath = path.resolve(__dirname, '../src');
const mkdirsSync = require('./utils').mkdirsSync;

const argv = process.argv[2];
if (!argv) {
  console.log(chalk.redBright('文件夹名称不能为空！'));
  console.log(chalk.cyan(`示例：npm run tep name\n`));
  return process.exit(0);
}
const dirName = argv.split('/')[argv.split('/').length - 1]; // 文件铭
const addFilePath = `${basePath}/views/Upin/${argv}`; // 文件目录路径
/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <div class="${dirName}-wrap">
    {{ pageName }}
  </div>
</template>

<script src="./${dirName}.js"></script>

<style lang="less" scoped>
.${dirName}-wrap {
  min-height: 100vh;
  width: 375px;
}
</style>
`;

// ts 模版
const jsTep = `import {} from '@api/Upin';
import meth from '@utils/methods';
export default {
  data() {
    return {
      pageName: '${dirName.substr(0, 1).toUpperCase() + dirName.substr(1)}',
    };
  },
  watch: {},
  created() {},
  methods: {},
};
`;

async function add() {
  if (await fs.existsSync(addFilePath)) {
    return console.log(chalk.grey('文件已存在！谨慎创建以防覆盖。\n'));
  }
  await mkdirsSync(addFilePath); // mkdir
  await process.chdir(addFilePath); // cd views
  await fs.writeFileSync(`${dirName}.vue`, VueTep); // vue
  await fs.writeFileSync(`${dirName}.js`, jsTep); // js
  console.log(chalk.greenBright(`${argv} 创建完成\n`));
}
add();
