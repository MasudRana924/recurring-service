const SubscriptionPlans = require("../schema/subscriptionSchema");
const createSubscriptionPlans = async (data) => {
    const newSubscriptionPlans = new SubscriptionPlans(data);
    const createNewSubscriptionPlans = await newSubscriptionPlans.save();
    return createNewSubscriptionPlans;
};
module.exports = {
    createSubscriptionPlans
}