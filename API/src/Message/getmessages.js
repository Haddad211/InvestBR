const InnovatorMessage = require('./messageinnovatorModel');
const InvestorMessage = require('./messageinvestorModel');

const getSenderMessages = async (req, res) => {
  const senderId = req.params.senderId;
  const receiverId = req.params.receiverId;
  InvestorMessage.find({ senderId: senderId, receiverId: receiverId })
  .then(messages => {
    res.json(messages);
  })

  .catch(err => {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  });
};

const getReceiverMessages = async (req, res) => {
  const senderId = req.params.senderId;
  const receiverId = req.params.receiverId;
  InnovatorMessage.find({ senderId: senderId, receiverId: receiverId })
  .then(messages => {
    res.json(messages);
  })

  .catch(err => {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  });
};

module.exports = { getSenderMessages, getReceiverMessages };
