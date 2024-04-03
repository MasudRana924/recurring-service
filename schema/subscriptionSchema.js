const mongoose = require("mongoose");
const uuidv4 = require('uuid').v4;
const subscriptioSchema = new mongoose.Schema({
    planId: {
        type: String,
        default: uuidv4,
        unique: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    modifiedAt: {
        type: Date,
        default: Date.now,
    },
});
const SubscriptionPlans = mongoose.model("SubscriptionPlans", subscriptioSchema);
module.exports = SubscriptionPlans;