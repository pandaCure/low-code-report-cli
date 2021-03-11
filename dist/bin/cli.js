#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = __importDefault(require("process"));
var path_1 = __importDefault(require("path"));
var create_1 = __importDefault(require("../src/create"));
var context = process_1.default.cwd();
var basePath = process_1.default.argv[2];
console.log(basePath);
// const basePath = 'src/features/report/config/config.ts'
var filePath = path_1.default.resolve(context, basePath);
var prettierPath = path_1.default.resolve(context, '.prettierrc');
create_1.default(filePath, prettierPath);
