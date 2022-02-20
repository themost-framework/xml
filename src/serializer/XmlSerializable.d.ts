
export declare interface XmlSerialization {
    properties: [][];
}

export declare interface XmlSerializerAnnotation {
    serialization?: XmlSerialization
}

export declare function XmlSerializable()
    : (target?: any) => void;