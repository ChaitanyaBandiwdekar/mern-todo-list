import express from 'express';
import { Item } from '../../models/Item.js'

const router = express.Router();

// @route   GET api/items
// @desc    Gets all items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})  


// @route   POST api/items
// @desc    Create an item
// @access  Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem
        .save()
        .then(item => res.json(item))
})  


// @route   DELETE api/items/:id
// @desc    Delete an item
// @access  Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => {
            console.log(err);
            res.status(404).json({success: false});
        })
})  

export default router;