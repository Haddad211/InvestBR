const investorModel = require('../investor/investorModel');
const innovaterModel = require('../innovater/innovaterModel');

const approveUser = async (req, res) => {
  const { id } = req.params;

  try {
    let user;


    user = await investorModel.findById(id);
    if (!user) user = await innovaterModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.status = true;
    await user.save();

    res.json({ message: 'User approved successfully', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { approveUser };
