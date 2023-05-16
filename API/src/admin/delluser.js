const investorModel = require('../investor/investorModel');
const innovaterModel = require('../innovater/innovaterModel');

const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await investorModel.findByIdAndRemove(id) || await innovaterModel.findByIdAndRemove(id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
module.exports = { deleteUser };
