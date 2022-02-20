const { XmlSerializable } = require("./XmlSerializable");

function XmlRootAttribute(elementName, namespace) {
    this.elementName = elementName;
    this.namespace = namespace;
}
/**
 * 
 * @param {string=} elementName 
 * @param {string=} namespace 
 * @returns 
 */
function XmlRoot(elementName, namespace) {
    return function (target) {
        if (typeof target !== 'function') {
            throw new Error('Invalid declaration type.')
        }
        XmlSerializable()(target);
        Object.assign(target.serialization, {
            root: new XmlRootAttribute(elementName, namespace)
        });
    };
}

module.exports = {
    XmlRootAttribute,
    XmlRoot
}