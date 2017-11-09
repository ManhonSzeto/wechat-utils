const Api = require('./lib/api');
const CustomMessage = require('./lib/custom_message');
const Signature = require('./lib/signature');
const InputEvent = require('./lib/input_event');
const InputMessage = require('./lib/input_message');
const MchMessage = require('./lib/mch_message');
const OutputMessage = require('./lib/output_message');
const PayMessage = require('./lib/pay_message');

module.exports = {
    Api,
    CustomMessage,
    Signature,
    InputEvent,
    InputMessage,
    MchMessage,
    OutputMessage,
    PayMessage
};

// (async () => {
//     const request = new PayMessage.UnifiedOrderRequest();
//     request.appid = 'wx36d8f5d642f50f45';
//     request.mch_id = '1482037352';
//     request.nonce_str = '5K8264ILTKCH16CQ2502SI8ZNMTM67VS';
//     request.body = '测试';
//     request.out_trade_no = '123123123123';
//     request.total_fee = 1;
//     request.spbill_create_ip = '123.123.123.123';
//     request.notify_url = 'http://www.weixin.qq.com/wxpay/pay.php';
//     request.trade_type = 'NATIVE';
//     request.sign = Signature.paySign(request.toObject(),
//         'J69u2vNRgeJq7KLtrw4vW6623xFnL4GX');
//     console.log((await Api.Payment.unifiedOrder(request.toString())).toObject());
//
// }) ();
