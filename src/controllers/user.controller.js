const { User } = require('../models');
const { userService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const create = catchAsync(async (req, res) => {
    const { wallet_address } = req.body
    const user = await User.findByWallet(wallet_address)
    if(user){
        return res.send({result: true, ...user})
    }
    const data = await userService.create(req.body);
    res.send({result: true, ...data})
});

module.exports = {
    create
}