var adminModel = require('./adminModel')
var createAdminControllerFn = async (req, res) =>
{
    try
{
    const body = req.body
    const adminModelD = new adminModel()
    adminModelD.firstname=body.firstname;
    adminModelD.lastname=body.lastname;
    adminModelD.email = body.email;
    adminModelD.password = body.password;
    await adminModelD.save()
 
    res.status(200).send({
        "status": true, "message": "Admin added "
    });
}
catch(error)
{
    res.status(400).send(error);
}
 
}
module.exports = { createAdminControllerFn };