const express = require('express');
const router = new express.Router();
const Item = require('../item');
const ExpressError = require('../expressError');
const items = require('../fakeDb');

router.get('/', function (req, res, next) {
    try {
        return res.json({ items: Item.findItems() });
    } catch (err) {
        return next(err)
    }
});

router.post('/', function (req, res, next) {
    try {
        let newItem = new Item(req.body.name, req.body.price);
        return res.json({ item: newItem });
    } catch (err) {
        return next(err);
    }
});

router.get('/items/:name', function (req, res, next) {
    try {
        let foundItem = Item.findItem(req.params.name);
        return res.json({ item: foundItem });
    } catch (err) {
        return next(err);
    }
});

router.patch('/items/:name', function (req, res, next) {
    try {
        let foundItem = Item.updateItem(req.params.name, req.body);
        return res.json({ item: foundItem });
    } catch (err) {
        return next(err);
    }
});

router.delete('/items/:name', function (req, res, next) {
    try {
        Item.deleteItem(req.params.name);
        return res.json({ message: 'Deleted' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;