const { User } = require('../models/User');
const signToken = require('../utils/auth');

module.exports = {
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
          $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });
    
        if (!foundUser) {
          return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }
    
        res.json(foundUser);
      },
    async createUser({ body }, res) {
            const user = await User.create(body);
            if (!user) {
              return res.status(400).json({ message: 'Something is wrong!' });
            }
            const token = signToken(user);
            res.json({ token, user });
            },
    async login({ body }, res) {
            const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
            if (!user) {
              return res.status(400).json({ message: 'Cannot find this user' });
            }
            const correctPw = await user.isCorrectPassword(body.password);
            if (!correctPw) {
              return res.status(400).json({ message: 'Wrong password!' });
            }
            const token = signToken(user);
            res.json({ token, user });
            },
    async saveVehicle({ params, body }, res) {
            const updatedUser = await User.findOneAndUpdate(
              { _id: params.userId },
              { $addToSet: { vehicles: body } },
              { new: true }
            );
            if (!updatedUser) {
              return res.status(404).json({ message: 'Cannot find a user with this id!' });
            }
            return res.json(updatedUser);
            },
    async removeVehicle({ params }, res) {
            const updatedUser = await User.findOneAndUpdate(
              { _id: params.userId },
              { $pull: { vehicles: { _id: params.vehicleId } } },
              { new: true }
            );
            if (!updatedUser) {
              return res.status(404).json({ message: 'Cannot find a user with this id!' });
            }
            return res.json(updatedUser);
            },
    async saveAppointment({ params, body }, res) {
            const updatedUser = await User.findOneAndUpdate(
              { _id: params.userId },
              { $addToSet: { appointments: body } },
              { new: true }
            );
            if (!updatedUser) {
              return res.status(404).json({ message: 'Cannot find a user with this id!' });
            }
            return res.json(updatedUser);
            },
    async removeAppointment({ params }, res) {
            const updatedUser = await User.findOneAndUpdate(
              { _id: params.userId },
              { $pull: { appointments: { _id: params.appointmentId } } },
              { new: true }
            );
            if (!updatedUser) {
              return res.status(404).json({ message: 'Cannot find a user with this id!' });
            }
            return res.json(updatedUser);
            },
    };
