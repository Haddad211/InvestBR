var investorModel=require('./investorModel');
var createInvestorControllerFn = async (req, res) =>
{
    try
{
    const body = req.body
    const investorModelD = new investorModel()
    investorModelD.firstname=body.firstname;
    investorModelD.lastname=body.lastname;
    investorModelD.email = body.email;
    investorModelD.password = body.password;
    investorModelD.confirmpassword = body.confirmpassword;
    investorModelD.rolecompany = body.rolecompany;
    investorModelD.company = body.company;
    investorModelD.zip = body.zip;
    investorModelD.country = body.country;
    investorModelD.code = body.code;
    investorModelD.phone = body.phone;
    investorModelD.branch = body.branch;
    investorModelD.status = false;
    await investorModelD.save()
 
    res.status(200).send({
        "status": true, "message": "investor added "
    });
}
catch(error)
{
    res.status(400).send(error);
}
 
}
var findInvestorByIdControllerFn = async (req, res) => {
    try {
      const id = req.params.id;
      const investor = await investorModel.findById(id);
      if (investor) {
        const { firstname, lastname, email, phone, code, company, rolecompany, country, zip, branch } = investor;
        res.status(200).send({ 
          firstname,
          lastname,
          email,
          phoneCode: code,
          company,
          phone:phone,
          roleCompany: rolecompany,
          country,
          zip,
          branch
        });
      } else {
        res.status(404).send({ message: "Investor not found" });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  };
  const updateInvestorControllerFn = async (req, res) => {
    try {
      const id = req.params.id;
      const { firstname, lastname, phone } = req.body;
      const investor = await investorModel.findById(id);
      if (!investor) {
        return res.status(404).send({ message: "Innovator not found" });
      }
      investor.firstname = firstname;
      investor.lastname = lastname;
      investor.phone = phone;
      const updatedinvestor = await investor.save();
      res.status(200).send(updatedinvestor);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  module.exports = { createInvestorControllerFn, findInvestorByIdControllerFn,updateInvestorControllerFn};