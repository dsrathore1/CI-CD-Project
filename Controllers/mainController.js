import productModel from "../Model/projectModel.js";

export const getProduct = async (req, res) => {
  const data = await productModel.find({});

  res.status(200).json({
    message: "All your data",
    data: data,
  });
};

export const createProduct = async (req, res) => {
  const { id, name, company } = req.body;
  try {
    const createPro = await productModel({
      id,
      name,
      company,
    });

    const saveData = await createPro.save();

    res.status(201).json(saveData);
  } catch (error) {
    if (error) throw error;
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, company } = req.body;

  const dataUpdated = await productModel.findOneAndUpdate(
    { id },
    {
      name,
      company,
    }
  );

  res.status(302).json({
    message: "Data Found!",
    data: dataUpdated,
  });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const deleteData = await productModel.findOneAndDelete({ id });

  res.status(204).json({
    message: "Successfully Deleted",
    data: deleteData,
  });
};
