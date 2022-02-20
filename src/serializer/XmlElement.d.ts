export declare class XmlElementAttribute {
    constructor(elementName: string, namespace?: string);
    elementName: string;
    namespace?: string;
}

export declare function XmlElement(elementName?: string, namespace?: string)
    : (target?: any, key?: string, descriptor?: any) => any;