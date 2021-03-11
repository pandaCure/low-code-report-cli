import chalk from 'chalk'
import commander from 'commander'
import inquirer from 'inquirer'
import fs from 'fs'
import module from 'module'
import ejs from 'ejs'
import prettier from 'prettier'
import _ from 'lodash'
import path from 'path'

export interface ITab {
  name: string,
  key: string,
  [key: string]: any
}
const createTabChoose = {name: '新建Tab', key: 'create', value: 'create'}
const chooseTab = async (tab: ITab[]) => {
  const choices = tab.concat([createTabChoose])
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'tab',
      message: '请选择在哪个Tab下创建报表',
      choices 
    }
  ])
}
const createTab = async ()=> {
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      key: 'name',
      message: "Tab名字 ----->:",
    },
    {
      type: 'input',
      name: 'key',
      key: 'key',
      message: "Tab唯一标识 ----->:",
      validate: function (value) {
        // TODO: 做检验
        return true
      },
    },
  ])
}
const createReport = async () => {
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'label',
      key: 'label',
      message: "报表名称 ----->:",
    },
    {
      type: 'input',
      name: 'value',
      key: 'value',
      message: "报表唯一标识 ----->:",
    },
    {
      type: 'input',
      name: 'description',
      key: 'description',
      message: "报表描述 ----->:",
    }
  ])
}
const main = async (targetFile: string, prettierPath: string) => {
  const data =  await import(targetFile)
  let {tabConfig, reportConfig} = data
  const tabConfigEnfore = tabConfig.map((v: ITab) => ({...v, value: v.key}))
  let {tab} = await chooseTab(tabConfigEnfore)
  if (tab === 'create') {
    const newTab = await createTab()
    tabConfig.push(newTab)
    tab = newTab.key
    console.log(tabConfig)
  }
  let createNewReport = await createReport()
  const item = {
    ...createNewReport,
    tab
  }
  if (!reportConfig[tab]) {
    reportConfig[tab] = [item]
  } else {
    const listItem = reportConfig[tab]
    listItem.push(item)
  }
  // console.log(reportConfig.toString())
  const str = `const tabConfig = ${JSON.stringify(tabConfig, null, 2)};
  const reportConfig = ${JSON.stringify(reportConfig, null, 2)};
  export { tabConfig, reportConfig };`
  prettier.resolveConfig(prettierPath).then((options) => {
    fs.writeFileSync('./config.ts', prettier.format(str, {}))
    const temp = fs.readFileSync(path.resolve(__dirname, '..', 'src/template/report.tsx.templ'), {encoding: 'utf-8'})
    fs.writeFileSync(`./${tab}-${createNewReport.value}.tsx`, _.template(temp)({type: _.upperFirst(createNewReport.value)}));
  });
  
}
export default main