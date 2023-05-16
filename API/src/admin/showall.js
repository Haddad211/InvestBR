const investorModel = require('../investor/investorModel');
const innovaterModel = require('../innovater/innovaterModel');

const getAllUsers = async (req, res) => {
  try {
    const investors = await investorModel.find({ status: false });
    const innovators = await innovaterModel.find({ status: false });
    
    const investorsWithName = investors.map(investor => {
      return {
        type:"investor",
        firstname: investor.firstname,
        lastname:investor.lastname,
        email: investor.email,
        country: investor.country,
        company:investor.company,
        rolecompany:investor.rolecompany,
        branch: investor.branch,
        code:investor.code,
        phone:investor.phone,
        id:investor.id
      };
    });

    const innovatorsWithName = innovators.map(innovator => {
      return {
        type: 'innovator',
        firstname:innovator.firstname,
        lastname:innovator.lastname,
        email: innovator.email,
        country: innovator.country,
        branch: innovator.branch,
        code:innovator.code,
        phone:innovator.phone,
        id:innovator.id
      };
    });
    
    res.status(200).json({ investors: investorsWithName, innovators: innovatorsWithName });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getAllUsers };
