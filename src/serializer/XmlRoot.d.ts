import { XmlSerialization } from "./XmlSerializable";

export declare interface XmlRootAnnotation extends XmlSerialization {
    root: XmlRootAttribute;
}

export declare class XmlRootAttribute {
    elementName: string;
    namespace?: string;
}

export declare function XmlRoot(elementName?: string, namespace?: string)
    : (target?: any) => any;