import {XmlElement, XmlSerializable, XSerializer, XmlRoot} from "../src/serializer/index";
import { XMLSerializer } from '@xmldom/xmldom';
describe('Serializer', () => {
    it('should get serialization attributes', () => {
        @XmlSerializable()
        class Food {
            @XmlElement()
            name;
            @XmlElement()
            description;
            @XmlElement('price')
            currentPrice;
        }
        const food = new Food();
        const properties = Food.serialization && Food.serialization.properties;
        expect(properties).toBeInstanceOf(Array);
        let property = properties.find((item) => {
            return item[0] === 'name';
        });
        expect(property).toBeTruthy();
        property = properties.find((item) => {
            return item[0] === 'currentPrice';
        });
        expect(property).toBeTruthy();
    });

    it('should serialize object', () => {
        @XmlSerializable()
        @XmlRoot('Food')
        class Food {
            @XmlElement()
            name;
            @XmlElement()
            description;
            @XmlElement('price')
            currentPrice;
            @XmlElement()
            createdAt;
        }
        const food = new Food();
        food.name = 'Belgian Waffles';
        food.currentPrice = 10.5;
        food.createdAt = new Date();
        const element = new XSerializer().serialize(food);
        expect(element).toBeTruthy();
        console.log(new XMLSerializer().serializeToString(element));
    });
});
