const express = require('express');
const router = new express.Router();
const ExpressError = require('./expressError');
const items = require('./fakeDb');


router.get('/items', function (req, res) {
    res.json({ items });
});

router.post('/items', function (req, res) {
    const newItem = {
        name: req.body.name,
        price: req.body.price
    }
    items.push(newItem);
    res.status(201).json({ item: newItem });
});

router.get('/items/:name', function (req, res) {
    const foundItem = items.find(item => item.name === req.params.name);
    if (foundItem === undefined) {
        throw new ExpressError("Item not found", 404);
    }
    res.json({ item: foundItem });
});

router.patch('/items/:name', function (req, res) {
    const foundItem = items.find(item => item.name === req.params.name);
    if (foundItem === undefined) {
        throw new ExpressError("Item not found", 404);
    }
    foundItem.name = req.body.name;
    foundItem.price = req.body.price;
    res.json({ item: foundItem });
});

router.delete('/items/:name', function (req, res) {
    const foundItem = items.find(item => item.name === req.params.name);
    if (foundItem === -1) {
        throw new ExpressError("Item not found", 404);
    }
    items.splice(foundItem, 1);
    res.json({ message: "Deleted" });
});

module.exports = router;