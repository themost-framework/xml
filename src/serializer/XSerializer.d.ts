export declare class XSerializer {
    constructor(options?: any);
    static serialize(object: any, options?: {
        document: Document
    }): Element;
    static deserialize<T>(element: Element, ctor?: (...args:any) => T): T;
}