import fs from 'fs'
import path from 'path'
import { parseJsonConfigFileContent } from 'typescript';
import {format} from 'util'
import ts, {createProgram} from 'byots'
import pug from 'pug'
import { Project, ScriptTarget } from "ts-morph";
const project = new Project();
const context = '/Users/amor/company/is-lti-fe/src/features';
const reportPath = path.resolve(context, 'report/config/config.ts')
console.log(fs.existsSync(reportPath));
const personFile = project.addSourceFileAtPath(reportPath);
// console.log(personFile.getVariableStatementOrThrow('reportConfig').getText())
// console.log()
let planPageText = personFile.getVariableStatementOrThrow('planPage').getText()
console.log(planPageText);
const reg = /:.*(?==)/g
console.log(planPageText.replace(reg, ' '))
// const context = process.cwd()
// const reportPath = path.resolve(context, 'report')
const planPage = {
    formItems: [
      {
        type: 'useSelect',
        name: '所属计划',
        label: 'p1',
        itemConfigParams: {
          require: false
        },
        CpConfig: {
          options: []
        }
      },
      {
        type: 'useSelect',
        name: '激励工具',
        label: 'p2',
        itemConfigParams: {
          require: false
        },
        CpConfig: {
          options: [],
          mode: 'multiple'
        }
      }
    ]
  };
const reportConfig = {
    'management': [
      { label: 'LTI全量数据表', value: 'all', description: '爱我中华', tab: 'management' },
      {
        label: 'LTI全量数据表',
        value: 'all',
        description: '爱我中华',
        tab: 'management',
        page: planPage
      }
    ]
  };
  type ITabName = 'management' | 'all'
  type IFileConfig = {
      [p in ITabName]: {
        label: string,
        value: string,
        description: string,
        tab: ITabName,
        page: any
      }[]
  }
// const writeFile = () => {
//     return new Promise(resolve, reject)
// }
// const createFile = async (config: IFileConfig) => {
//     const keysList = Object.keys(config) as ITabName[]
//     keysList.forEach((itemConfig) => {
//         for (const item of config[itemConfig]) {
//             const filePath = path.resolve(reportPath, `${itemConfig}-${item.value}.tsx`)
//             if (!fs.existsSync(filePath)) {
//                 fs.w
//             }
//         }
//     })
    
// }
// console.log(format('%j', fileContent))
// console.log(fileContent);
// import(fileContent).then(content => {
//     console.log(content);
// })