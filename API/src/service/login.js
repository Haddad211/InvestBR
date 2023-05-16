const jwt = require('jsonwebtoken');
const investorModel = require('../investor/investorModel');
const innovatorModel = require('../innovater/innovaterModel');
const adminModel = require('../admin/addamin/adminModel');

const loginControllerFn = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // Check if the entered credentials match admin credentials
    const admin = await adminModel.findOne({ email: email });
    if (admin && password === admin.password) {
      const accessToken = jwt.sign({ id: admin._id }, 'my_secret_key');
      return res.status(200).send({ "status": true, "message": "Admin authenticated", accessToken });
    }

    // Proceed with existing login logic for investors and innovators
    const investor = await investorModel.findOne({ email: email });
    const innovator = await innovatorModel.findOne({ email: email });

    if (!investor && !innovator) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (investor && password !== investor.password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (innovator && password !== innovator.password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (investor && investor.status === true) {
      const accessToken = jwt.sign({ id: investor._id }, 'my_secret_key');
      const id=investor._id;
      return res.status(200).send({ "status": true, "message": "Investor authenticated", accessToken,id });
    }

    if (innovator && innovator.status === true) {
      const accessToken = jwt.sign({ id: innovator._id },'my_secret_key');
      const id=innovator._id;
      return res.status(200).send({ "status": true, "message": "Innovator authenticated", accessToken,id });
    }

    return res.status(401).json({ message: 'Your account is not yet approved by the admin' });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { loginControllerFn };
