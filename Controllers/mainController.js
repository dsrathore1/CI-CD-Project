import productModel from "../Model/projectModel.js";

export const getProduct = async (req, res) => {
  const data = await productModel.find({});

  res.status(200).json(data);
};

export const createProduct = async (req, res) => {
  const { id, name, company } = req.body;

  const createPro = await productModel({
    id,
    name,
    company,
  });

  const saveData = createPro.save();

  res.status(201).json(saveData);
};
