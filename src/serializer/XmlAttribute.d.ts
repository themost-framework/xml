export declare class XmlAttributeAttribute {
    attributeName: string;
    namespace?: string;
}

export declare function XmlAttribute(attributeName?: string, namespace?: string)
    : (target?: any, key?: string, descriptor?: any) => any;