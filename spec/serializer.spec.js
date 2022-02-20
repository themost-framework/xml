import {XmlElement, XmlSerializable} from "../src/serializer/index";
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
            return item[0] === 'price';
        });
        expect(property).toBeTruthy();
    });
});
