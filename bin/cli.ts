#!/usr/bin/env node
import process from 'process'
import path from 'path'
import main from '../src/create'
const context = process.cwd();
const basePath = process.argv[2]
console.log(basePath)
// const basePath = 'src/features/report/config/config.ts'
const filePath = path.resolve(context, basePath)
const prettierPath = path.resolve(context, '.prettierrc')
main(filePath, prettierPath)