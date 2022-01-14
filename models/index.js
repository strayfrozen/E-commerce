// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Create associations


// Products belongsTo Category

Product.belongsTo(Category, {
  //unsure on foreign key
  foreignKey: 'product_id'
});

// Categories have many Products

Category.hasMany(Product, {
  //unsure on foreign key
  foreignKey: 'product_id'
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: ProductTag,
  //unsure on as and foreign key
  as: 'tag',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  //unsure on as and foreign key
  as: 'tag',
  foreignKey: 'product_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
