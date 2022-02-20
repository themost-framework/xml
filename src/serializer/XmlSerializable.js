function XmlSerializable() {
    return function (target) {
        if (typeof target !== 'function') {
            throw new Error('Invalid declaration type.')
        }
        if (Object.prototype.hasOwnProperty.call(target, 'serialization') === false) {
            Object.defineProperty(target, 'serialization', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: {
                    properties: []
                }
            });
        }
    };
}

module.exports = {
    XmlSerializable
}