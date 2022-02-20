const { XmlSerializable } = require("./XmlSerializable");

function XmlElementAttribute(elementName, namespace) {
    this.elementName = elementName;
    this.namespace = namespace;
}

/**
 * @param {string=} elementName
 * @param {string=} namespace
 * @returns 
 */
function XmlElement(elementName, namespace) {
    return function(target, key, descriptor) {
        XmlSerializable()(target.constructor);
        const key1 = elementName || key;
        target.constructor.serialization.properties.push(
            [
                key,
                new XmlElementAttribute(key1, namespace)
            ]
        )
    }
}

module.exports = {
    XmlElementAttribute,
    XmlElement
}