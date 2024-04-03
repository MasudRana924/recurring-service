const axios = require('axios');
const SubscriptionModel = require('../models/subscription');
const uuidv4 = require('uuid').v4;
const getSubscriptionHeaders = async () => {
    return {
        'version': 'v1.0',
        'channelId': 'masudrana',
        'timeStamp': '2021-02-08T09:16:28.603855Z',
        'x-api-key': 'o42HqdbJtEoqyZA8uGn-ElEuee4_IAPQ',
        'Content-Type': 'application/json'
    };
};
// subscription

const createSubscription = async (req, res) => {
    const { amount, frequency } = req.body;
    const id = uuidv4();
    try {
        const { data } = await axios.post("https://gateway.sbrecurring.pay.bka.sh/gateway/api/subscription", {
            "subscriptionRequestId": id,
            "serviceId": "100001",
            "redirectUrl": "https://app.gktechbd.com/api/v2/auto-pay/response/bkash/callback/",
            "paymentType": "FIXED",
            "subscriptionType": "BASIC",
            "amount": amount,
            "currency": "BDT",
            "frequency": frequency,
            "startDate": "2024-04-03",
            "expiryDate": "2024-04-04",
            "payerType": "CUSTOMER",
            "payer": null,
            "subscriptionReference": "user",
            "firstPaymentAmount": "10",
            "maxCapAmount": "500",
            "merchantShortCode": "01789123455",
            "firstPaymentIncludedInCycle": "true",
            "maxCapRequired": "true"
        }, {
            headers: await getSubscriptionHeaders(),
        });
        if (data) {
            await SubscriptionModel.createSubscriptionPlans({
                subscriptionRequestId: data?.subscriptionRequestId,
                amount: parseInt(data.amount)
            })
        }
        return res.status(200).json({ redirectURL: data.redirectURL });
    } catch (error) {
        return res.status(500).json({ error: 'Payment creation failed' });
    }
};
module.exports = {
    createSubscription
}