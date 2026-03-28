const OTP = require('../models/otp');
const jwt = require('jsonwebtoken');

const sendOTP = async (req, res) => {
  const { email, phone } = req.body;
  
  if (!email && !phone) {
    return res.status(400).json({ error: 'Email or phone is required' });
  }

  try {
    const mockOTP = '123456'; // Prompt asks for a mock OTP
    
    // In a real app, you would use email/phone to store. 
    // The requirement says "accepts email or phone, sends mock OTP"
    await OTP.create({ email: email || phone, otp: mockOTP });

    res.status(200).json({ message: 'Mock OTP sent successfully', otp: mockOTP });
  } catch (error) {
    res.status(500).json({ error: 'Error creating OTP session' });
  }
};

const verifyOTP = async (req, res) => {
  const { email, phone, otp } = req.body;
  const identifier = email || phone;

  try {
    const validOTP = await OTP.findOne({ email: identifier, otp });

    if (!validOTP) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    // Generate JWT
    const token = jwt.sign({ identifier }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Clean up OTP
    await OTP.deleteOne({ _id: validOTP._id });

    res.status(200).json({ message: 'OTP verified', token });
  } catch (error) {
    res.status(500).json({ error: 'Verification failed' });
  }
};

module.exports = { sendOTP, verifyOTP };
