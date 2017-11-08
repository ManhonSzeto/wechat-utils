const Schema = require('./message_schema').Schema;

class TransfersRequest extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'mch_appid');
        Schema.defineElement(this, 'mchid');
        Schema.defineElement(this, 'device_info');
        Schema.defineElement(this, 'nonce_str');
        Schema.defineElement(this, 'sign');
        Schema.defineElement(this, 'partner_trade_no');
        Schema.defineElement(this, 'openid');
        Schema.defineElement(this, 'check_name');
        Schema.defineElement(this, 're_user_name');
        Schema.defineElement(this, 'amount');
        Schema.defineElement(this, 'desc');
        Schema.defineElement(this, 'spbill_create_ip');
    }
}

class TransfersResponse extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'return_code', true);
        Schema.defineElement(this, 'return_msg', true);
        Schema.defineElement(this, 'mch_appid', true);
        Schema.defineElement(this, 'mch_id', true);
        Schema.defineElement(this, 'device_info', true);
        Schema.defineElement(this, 'nonce_str', true);
        Schema.defineElement(this, 'result_code', true);
        Schema.defineElement(this, 'err_code', true);
        Schema.defineElement(this, 'err_code_des', true);
        Schema.defineElement(this, 'partner_trade_no', true);
        Schema.defineElement(this, 'payment_no', true);
        Schema.defineElement(this, 'prepay_id', true);
        Schema.defineElement(this, 'payment_time', true);
    }
}

module.exports = {
    TransfersRequest,
    TransfersResponse
};
