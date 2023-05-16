const InnovatorMessage = require('./messageinnovatorModel');

const sendInnovatorMessage = async (req, res) => {
  const senderId = req.params.id;
  const receiverId = req.body.receiverId;
  const content = req.body.content;

  try {
    const newMessage = new InnovatorMessage({ senderId, receiverId, content });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { sendInnovatorMessage };
