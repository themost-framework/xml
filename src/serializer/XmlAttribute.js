const { XmlSerializable } = require("./XmlSerializable");

function XmlAttributeAttribute(attributeName, namespace) {
    this.attributeName = attributeName;
    this.namespace = namespace;
}

/**
 * @param {string=} attributeName
 * @param {string=} namespace
 * @returns 
 */
function XmlAttribute(attributeName, namespace) {
    return function(target, key, descriptor) {
        XmlSerializable()(target.constructor);
        const key1 = attributeName || key;
        target.constructor.serialization.properties.push(
            [
                key1,
                new XmlAttributeAttribute(key1, namespace)
            ]
        )
    }
}

module.exports = {
    XmlAttributeAttribute,
    XmlAttribute
}