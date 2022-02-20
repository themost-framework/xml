export declare class XmlElementAttribute {
    elementName: string;
    namespace?: string;
}

export declare function XmlElement(elementName?: string, namespace?: string)
    : (target?: any, key?: string, descriptor?: any) => any;