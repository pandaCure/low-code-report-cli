export interface ITab {
    name: string;
    key: string;
    [key: string]: any;
}
declare const main: (targetFile: string, prettierPath: string) => Promise<void>;
export default main;
