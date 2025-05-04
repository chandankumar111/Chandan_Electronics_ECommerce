const mongoose = require('mongoose');
const Product = require('../models/product');
const productSeeds = require('./productSeeds');

const seedDB = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productSeeds);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

module.exports = seedDB;
