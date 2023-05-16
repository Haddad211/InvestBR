const investorModel = require('../investor/investorModel');
const innovatorModel = require('../innovater/innovaterModel');

const dashboardControllerFn = async (req, res) => {
  try {
    const investorCount = await investorModel.countDocuments();
    const innovatorCount = await innovatorModel.countDocuments();

    return res.status(200).json({ investorCount, innovatorCount });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { dashboardControllerFn };
