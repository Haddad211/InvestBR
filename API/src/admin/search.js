const investorModel = require('../investor/investorModel');
const innovaterModel = require('../innovater/innovaterModel');

const getUsersByName = async (req, res) => {
  try {
    const name = req.query.name;
    const investors = await investorModel.find({ lastname: name });
    const innovators = await innovaterModel.find({ lastname: name });
    
    const investorsWithName = investors.map(investor => {
      return {
        name: 'investor',
        lastname: investor.lastname,
        email: investor.email,
        password: investor.password,
        branch: investor.branch
      };
    });

    const innovatorsWithName = innovators.map(innovator => {
      return {
        name: 'innovator',
        email: innovator.email,
        password: innovator.password,
        branch: innovator.branch
      };
    });
    
    res.status(200).json({ investors: investorsWithName, innovators: innovatorsWithName });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getUsersByName };
