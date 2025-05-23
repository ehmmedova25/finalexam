import productModel from "../model/productModel.js";

const getProducts = async (req, res) => {
  const products = await productModel.find();
  res.json(products);
};

const postProducts = async (req, res) => {
  const { name, price, image } = req.body;
  const product = new productModel({ name, price, image });
  await product.save();
  res.json(product);
};

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  await productModel.findByIdAndDelete(id);
  res.json({ message: `${id} -li məhsul silindi` });
};




export { getProducts, postProducts, deleteProducts };
