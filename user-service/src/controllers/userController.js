const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async (req, res) => {
    try {
        const { name, mobile_no, email, password } = req.body;
        const user = new User({ name, mobile_no, email, password });
        // Validations later
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !await user.comparePassword(password)) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const updates = req.body;
        const user = await User.findByIdAndUpdate(userId, updates, { new: true });
        res.json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.searchUser = async (req, res) => {
    try {
        const { name } = req.query;
        const users = await User.find({ name: new RegExp(name, 'i') });
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
