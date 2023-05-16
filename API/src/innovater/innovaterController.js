const innovaterModel = require("./innovaterModel");
const jwt = require('jsonwebtoken');

const createInnovaterControllerFn = async (req, res) => {
  try {
    const body = req.body;
    const innovaterModelD = new innovaterModel();
    innovaterModelD.firstname = body.firstname;
    innovaterModelD.lastname = body.lastname;
    innovaterModelD.email = body.email;
    innovaterModelD.password = body.password;
    innovaterModelD.confirmpassword = body.confirmpassword;
    innovaterModelD.zip = body.zip;
    innovaterModelD.country = body.country;
    innovaterModelD.code = body.code;
    innovaterModelD.phone = body.phone;
    innovaterModelD.branch = body.branch;
    innovaterModelD.status = false;
    await innovaterModelD.save();

    res.status(200).send({
      "status": true,
      "message": "Innovater added"
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateInnovatorControllerFn = async (req, res) => {
  try {
    const id = req.params.id;
    const { firstname, lastname, phone } = req.body;
    const innovator = await innovaterModel.findById(id);
    if (!innovator) {
      return res.status(404).send({ message: "Innovator not found" });
    }
    innovator.firstname = firstname;
    innovator.lastname = lastname;
    innovator.phone = phone;
    const updatedInnovator = await innovator.save();
    res.status(200).send(updatedInnovator);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


var findInnovatorByIdControllerFn = async (req, res) => {
  try {
    const id = req.params.id;
    const innovator = await innovaterModel.findById(id);
    if (innovator) {
      const { firstname , lastname , email, phone, code, country, zip , branch } = innovator;
      res.status(200).send({ 
        firstname,
        lastname,
        email,
        phoneCode: code,
        phone:phone,
        country,
        zip,
        branch
      });
    } else {
      res.status(404).send({ message: "innovator not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createInnovaterControllerFn,
  findInnovatorByIdControllerFn,
  updateInnovatorControllerFn
};
