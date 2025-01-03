const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const { Verification_Email_Template } = require('../models/EmailTemplates');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aks42423@gmail.com',
    pass:'whqy jpzy efkc pfrk',
  },
});

const sendOTPEmail = async (email, otp) => {
  const htmlContent = Verification_Email_Template.replace('{verificationCode}', otp);

  const mailOptions = {
    from:'aks42423@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    html: htmlContent,  
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP email sent successfully');
    alert('OTP sent successfully');
  } catch (error) {
    console.error('Error sending OTP email:', error);
  }
};

module.exports = sendOTPEmail;
