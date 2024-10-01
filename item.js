/* Item class */
const items = require('./fakeDb');
const ExpressError = require('./expressError');

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this);
    }

    static findItems() {
        return items;
    }

    static findItem(name) {
        const foundItem = items.find(item => item.name === req.params.name);
        if (foundItem === undefined) {
            throw new ExpressError("Item not found", 404);
        }

        return foundItem;
    }

    static updateItem(name, data) {
        let foundItem = this.findItem(name);
        if (foundItem === undefined) {
            throw new ExpressError("Item not found", 404);
        }
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    static deleteItem(name) {
        const foundItem = this.findItem(name);
        if (foundItem === -1) {
            throw new ExpressError("Item not found", 404);
        }
        items.splice(foundItem, 1);
    }
}

module.exports = Item;