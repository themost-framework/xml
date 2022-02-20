const { DOMImplementation } = require('@xmldom/xmldom');
const { XmlAttribute, XmlAttributeAttribute } = require('./XmlAttribute');
const { XmlElementAttribute } = require('./XmlElement');
const { XmlRootAttribute } = require('./XmlRoot');

function unquote(str) {
    if (typeof str === 'string') {
        return str.replace(/^"|"$/g, '');
    }
}

/**
 * @param {*=} options 
 */
function XSerializer(options) {

}
/**
 * 
 * @param {*} object 
 * @param {{document: Document}=} options 
 * @returns 
 */
XSerializer.prototype.serialize = function(object, options) {
    //
    if (object == null) {
        return;
    }
    const prototype = Object.getPrototypeOf(object);
    /**
     * @type {XmlRootAnnotation}
     */
    let serialization = {
        root: new XmlRootAttribute(prototype.constructor && prototype.constructor.name),
        properties: Object.keys(object).map(function(key) {
            return [ key, new XmlElementAttribute(key) ];
        })
    };
    if (Object.prototype.hasOwnProperty.call(prototype.constructor, 'serialization')) {
        serialization = prototype.constructor.serialization;
        if (serialization.root == null) {
            Object.assign(serialization, {
                root: new XmlRootAttribute(prototype.constructor && prototype.constructor.name),
            });
        }
    }
    let document;
    let newElement;
    if (options && options.document) {
        document = document;
        if (serialization.root.namespace) {
            newElement = document.createElementNS(serialization.root.namespace, serialization.root.elementName);
        } else {
            newElement = document.createElement(serialization.root.elementName);
        }
    } else {
        document = new DOMImplementation().createDocument(serialization.root.namespace, serialization.root.elementName , 'application/xml');
        newElement = document.documentElement;
    }
    serialization.properties.forEach(function(property) {
        const name = property[0];
        const attribute = property[1];
        if (Object.prototype.hasOwnProperty.call(object, name)) {
            const value = object[name];
            if (value != null) {
                if (attribute instanceof XmlElementAttribute) {
                    const valuePrototype = Object.getPrototypeOf(value);
                    if (valuePrototype &&
                        valuePrototype.constructor &&
                        valuePrototype.constructor.serialization) {
                            newElement.appendChild(this.serialize(value));
                    } else {
                        const element = document.createElement(attribute.elementName);
                        element.textContent = unquote(JSON.stringify(value));
                        newElement.appendChild(element);
                    }
                } else if (attribute instanceof XmlAttributeAttribute) {
                    if (attribute.namespace) {
                        newElement.setAttributeNS(attribute.attributeName,
                            attribute.namespace,
                            unquote(JSON.stringify(value)))
                    } else {
                        newElement.setAttribute(attribute.attributeName,
                            unquote(JSON.stringify(value)));
                    }
                }
            }
        }
    });
    return newElement;
}

XSerializer.prototype.deserialize = function(element, ctor) {
    //
}

module.exports = {
    XSerializer
}