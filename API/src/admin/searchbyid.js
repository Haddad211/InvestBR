const investorModel = require('../investor/investorModel');
const innovaterModel = require('../innovater/innovaterModel');

const getUserById = async (req, res) => {
  try {
    const id = req.query.id;
    const investors = await investorModel.findById(id);
    const innovators = await innovaterModel.findById(id);
    
    const investorsWithName = investors ? {
      name: 'investor',
      lastname: investors.lastname,
      email: investors.email,
      password: investors.password,
      branch: investors.branch
    } : null;

    const innovatorsWithName = innovators ? {
      name: 'innovator',
      email: innovators.email,
      password: innovators.password,
      branch: innovators.branch
    } : null;
    
    res.status(200).json({ investor: investorsWithName, innovator: innovatorsWithName });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getUserById };
