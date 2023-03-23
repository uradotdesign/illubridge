const express = require('express');
const router = express.Router();
const Svg = require('../models/Svgs');

router.get('/', async (req, res) => {
  const svg = await Svg.find();
  res.json(svg);
});

router.post('/new', async (req, res) => {
  const newSvg = new Svg({
    svg: '<svg></svg>',
  });
  const savedSvg = await newSvg.save();
  res.json(savedSvg);
});

router.get('/get/:id', async (req, res) => {
  const svg = await Svg.findById({ _id: req.params.id });
  res.json(svg);
});

router.delete('/delete/:id', async (req, res) => {
  const svgDelete = await Svg.findByIdAndDelete({ _id: req.params.id });
  res.json(svgDelete);
});

router.put('/update/:id', async (req, res) => {
  const svgUpdate = await Svg.updateOne({
    xml: '<svg></svg>',
  });
  res.json(svgUpdate);
});

module.exports = router;
