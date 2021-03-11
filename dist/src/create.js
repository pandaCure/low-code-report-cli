"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var fs_1 = __importDefault(require("fs"));
var prettier_1 = __importDefault(require("prettier"));
var lodash_1 = __importDefault(require("lodash"));
var path_1 = __importDefault(require("path"));
var createTabChoose = { name: '新建Tab', key: 'create', value: 'create' };
var chooseTab = function (tab) { return __awaiter(void 0, void 0, void 0, function () {
    var choices;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                choices = tab.concat([createTabChoose]);
                return [4 /*yield*/, inquirer_1.default.prompt([
                        {
                            type: 'list',
                            name: 'tab',
                            message: '请选择在哪个Tab下创建报表',
                            choices: choices
                        }
                    ])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var createTab = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
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
                            return true;
                        },
                    },
                ])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var createReport = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, inquirer_1.default.prompt([
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
                ])];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var main = function (targetFile, prettierPath) { return __awaiter(void 0, void 0, void 0, function () {
    var data, tabConfig, reportConfig, tabConfigEnfore, tab, newTab, createNewReport, item, listItem, str;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(targetFile)); })];
            case 1:
                data = _a.sent();
                tabConfig = data.tabConfig, reportConfig = data.reportConfig;
                tabConfigEnfore = tabConfig.map(function (v) { return (__assign(__assign({}, v), { value: v.key })); });
                return [4 /*yield*/, chooseTab(tabConfigEnfore)];
            case 2:
                tab = (_a.sent()).tab;
                if (!(tab === 'create')) return [3 /*break*/, 4];
                return [4 /*yield*/, createTab()];
            case 3:
                newTab = _a.sent();
                tabConfig.push(newTab);
                tab = newTab.key;
                console.log(tabConfig);
                _a.label = 4;
            case 4: return [4 /*yield*/, createReport()];
            case 5:
                createNewReport = _a.sent();
                item = __assign(__assign({}, createNewReport), { tab: tab });
                if (!reportConfig[tab]) {
                    reportConfig[tab] = [item];
                }
                else {
                    listItem = reportConfig[tab];
                    listItem.push(item);
                }
                str = "const tabConfig = " + JSON.stringify(tabConfig, null, 2) + ";\n  const reportConfig = " + JSON.stringify(reportConfig, null, 2) + ";\n  export { tabConfig, reportConfig };";
                prettier_1.default.resolveConfig(prettierPath).then(function (options) {
                    fs_1.default.writeFileSync('./config.ts', prettier_1.default.format(str, {}));
                    var temp = fs_1.default.readFileSync(path_1.default.resolve(__dirname, '..', 'src/template/report.tsx.templ'), { encoding: 'utf-8' });
                    fs_1.default.writeFileSync("./" + tab + "-" + createNewReport.value + ".tsx", lodash_1.default.template(temp)({ type: lodash_1.default.upperFirst(createNewReport.value) }));
                });
                return [2 /*return*/];
        }
    });
}); };
exports.default = main;
