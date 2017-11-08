const Schema = require('./message_schema').Schema;

class UnifiedOrderRequest extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'appid');
        Schema.defineElement(this, 'mch_id');
        Schema.defineElement(this, 'device_info');
        Schema.defineElement(this, 'nonce_str');
        Schema.defineElement(this, 'sign');
        Schema.defineElement(this, 'body');
        Schema.defineElement(this, 'detail', true);
        Schema.defineElement(this, 'attach');
        Schema.defineElement(this, 'out_trade_no');
        Schema.defineElement(this, 'fee_type');
        Schema.defineElement(this, 'total_fee');
        Schema.defineElement(this, 'spbill_create_ip');
        Schema.defineElement(this, 'time_start');
        Schema.defineElement(this, 'time_expire');
        Schema.defineElement(this, 'goods_tag');
        Schema.defineElement(this, 'notify_url');
        Schema.defineElement(this, 'trade_type');
        Schema.defineElement(this, 'product_id');
        Schema.defineElement(this, 'limit_pay');
        Schema.defineElement(this, 'openid');
    }
}

class UnifiedOrderResponse extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'return_code', true);
        Schema.defineElement(this, 'return_msg', true);
        Schema.defineElement(this, 'appid', true);
        Schema.defineElement(this, 'mch_id', true);
        Schema.defineElement(this, 'device_info', true);
        Schema.defineElement(this, 'nonce_str', true);
        Schema.defineElement(this, 'sign', true);
        Schema.defineElement(this, 'err_code', true);
        Schema.defineElement(this, 'err_code_des', true);
        Schema.defineElement(this, 'result_code', true);
        Schema.defineElement(this, 'trade_type', true);
        Schema.defineElement(this, 'prepay_id', true);
        Schema.defineElement(this, 'code_url', true);
    }
}

class OrderQueryRequest extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'appid');
        Schema.defineElement(this, 'mch_id');
        Schema.defineElement(this, 'transaction_id');
        Schema.defineElement(this, 'out_trade_no');
        Schema.defineElement(this, 'nonce_str');
        Schema.defineElement(this, 'sign');
        Schema.defineElement(this, 'sign_type');
    }
}

class OrderQueryResponse extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'return_code', true);
        Schema.defineElement(this, 'return_msg', true);
        Schema.defineElement(this, 'appid', true);
        Schema.defineElement(this, 'mch_id', true);
        Schema.defineElement(this, 'nonce_str', true);
        Schema.defineElement(this, 'sign', true);
        Schema.defineElement(this, 'result_code', true);
        Schema.defineElement(this, 'err_code', true);
        Schema.defineElement(this, 'err_code_des', true);
        Schema.defineElement(this, 'device_info', true);
        Schema.defineElement(this, 'openid', true);
        Schema.defineElement(this, 'is_subscribe', true);
        Schema.defineElement(this, 'trade_type', true);
        Schema.defineElement(this, 'trade_state', true);
        Schema.defineElement(this, 'bank_type', true);
        Schema.defineElement(this, 'total_fee');
        Schema.defineElement(this, 'settlement_total_fee');
        Schema.defineElement(this, 'fee_type', true);
        Schema.defineElement(this, 'cash_fee');
        Schema.defineElement(this, 'cash_fee_type', true);
        Schema.defineElement(this, 'coupon_fee');
        Schema.defineElement(this, 'coupon_count');
        Schema.defineElementArray(this, 'coupon_type_', true);
        Schema.defineElementArray(this, 'coupon_id_', true);
        Schema.defineElementArray(this, 'coupon_fee_');
        Schema.defineElement(this, 'transaction_id', true);
        Schema.defineElement(this, 'out_trade_no', true);
        Schema.defineElement(this, 'attach', true);
        Schema.defineElement(this, 'time_end', true);
        Schema.defineElement(this, 'trade_state_desc', true);
    }
}

class UnifiedOrderNotification extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'return_code', true);
        Schema.defineElement(this, 'return_msg', true);
        Schema.defineElement(this, 'appid', true);
        Schema.defineElement(this, 'mch_id', true);
        Schema.defineElement(this, 'device_info', true);
        Schema.defineElement(this, 'nonce_str', true);
        Schema.defineElement(this, 'sign', true);
        Schema.defineElement(this, 'sign_type', true);
        Schema.defineElement(this, 'result_code', true);
        Schema.defineElement(this, 'err_code', true);
        Schema.defineElement(this, 'err_code_des', true);
        Schema.defineElement(this, 'openid', true);
        Schema.defineElement(this, 'is_subscribe', true);
        Schema.defineElement(this, 'trade_type', true);
        Schema.defineElement(this, 'bank_type', true);
        Schema.defineElement(this, 'total_fee');
        Schema.defineElement(this, 'settlement_total_fee');
        Schema.defineElement(this, 'fee_type', true);
        Schema.defineElement(this, 'cash_fee');
        Schema.defineElement(this, 'cash_fee_type', true);
        Schema.defineElement(this, 'coupon_fee');
        Schema.defineElement(this, 'coupon_count');
        Schema.defineElementArray(this, 'coupon_type_', true);
        Schema.defineElementArray(this, 'coupon_id_', true);
        Schema.defineElementArray(this, 'coupon_fee_');
        Schema.defineElement(this, 'transaction_id', true);
        Schema.defineElement(this, 'out_trade_no', true);
        Schema.defineElement(this, 'attach', true);
        Schema.defineElement(this, 'time_end', true);
    }
}

class UnifiedOrderNotificationResponse extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'return_code', true);
        Schema.defineElement(this, 'return_msg', true);
    }
}

class CloseOrderRequest extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'appid');
        Schema.defineElement(this, 'mch_id');
        Schema.defineElement(this, 'out_trade_no');
        Schema.defineElement(this, 'nonce_str');
        Schema.defineElement(this, 'sign');
        Schema.defineElement(this, 'sign_type');
    }
}

class CloseOrderResponse extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'return_code', true);
        Schema.defineElement(this, 'return_msg', true);
        Schema.defineElement(this, 'appid', true);
        Schema.defineElement(this, 'mch_id', true);
        Schema.defineElement(this, 'nonce_str', true);
        Schema.defineElement(this, 'sign', true);
        Schema.defineElement(this, 'result_code', true);
        Schema.defineElement(this, 'result_msg', true);
        Schema.defineElement(this, 'err_code', true);
        Schema.defineElement(this, 'err_code_des', true);
    }
}

class RefundRequest extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'appid');
        Schema.defineElement(this, 'mch_id');
        Schema.defineElement(this, 'nonce_str');
        Schema.defineElement(this, 'sign');
        Schema.defineElement(this, 'sign_type');
        Schema.defineElement(this, 'transaction_id');
        Schema.defineElement(this, 'out_trade_no');
        Schema.defineElement(this, 'out_refund_no');
        Schema.defineElement(this, 'total_fee');
        Schema.defineElement(this, 'refund_fee');
        Schema.defineElement(this, 'refund_fee_type');
        Schema.defineElement(this, 'refund_desc');
        Schema.defineElement(this, 'refund_account');
    }
}

class RefundResponse extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'return_code', true);
        Schema.defineElement(this, 'return_msg', true);
        Schema.defineElement(this, 'result_code', true);
        Schema.defineElement(this, 'err_code', true);
        Schema.defineElement(this, 'err_code_des', true);
        Schema.defineElement(this, 'appid', true);
        Schema.defineElement(this, 'mch_id', true);
        Schema.defineElement(this, 'nonce_str', true);
        Schema.defineElement(this, 'sign', true);
        Schema.defineElement(this, 'transaction_id', true);
        Schema.defineElement(this, 'out_trade_no', true);
        Schema.defineElement(this, 'out_refund_no', true);
        Schema.defineElement(this, 'refund_id', true);
        Schema.defineElement(this, 'refund_fee');
        Schema.defineElement(this, 'settlement_refund_fee');
        Schema.defineElement(this, 'total_fee');
        Schema.defineElement(this, 'settlement_total_fee');
        Schema.defineElement(this, 'fee_type', true);
        Schema.defineElement(this, 'cash_fee');
        Schema.defineElement(this, 'cash_fee_type', true);
        Schema.defineElement(this, 'cash_refund_fee');
        Schema.defineElementArray(this, 'coupon_type_', true);
        Schema.defineElement(this, 'coupon_refund_fee');
        Schema.defineElementArray(this, 'coupon_refund_fee_');
        Schema.defineElement(this, 'coupon_refund_count');
        Schema.defineElementArray(this, 'coupon_refund_id_', true);
    }
}

class RefundQueryRequest extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'appid');
        Schema.defineElement(this, 'mch_id');
        Schema.defineElement(this, 'nonce_str');
        Schema.defineElement(this, 'sign');
        Schema.defineElement(this, 'sign_type');
        Schema.defineElement(this, 'transaction_id');
        Schema.defineElement(this, 'out_trade_no');
        Schema.defineElement(this, 'out_refund_no');
        Schema.defineElement(this, 'refund_id');
        Schema.defineElement(this, 'offset');
    }
}

class RefundQueryResponse extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'return_code', true);
        Schema.defineElement(this, 'return_msg', true);
        Schema.defineElement(this, 'result_code', true);
        Schema.defineElement(this, 'err_code', true);
        Schema.defineElement(this, 'err_code_des', true);
        Schema.defineElement(this, 'appid', true);
        Schema.defineElement(this, 'mch_id', true);
        Schema.defineElement(this, 'nonce_str', true);
        Schema.defineElement(this, 'sign', true);
        Schema.defineElement(this, 'total_refund_count');
        Schema.defineElement(this, 'transaction_id', true);
        Schema.defineElement(this, 'out_trade_no', true);
        Schema.defineElement(this, 'total_fee');
        Schema.defineElement(this, 'settlement_total_fee');
        Schema.defineElement(this, 'fee_type', true);
        Schema.defineElement(this, 'cash_fee');
        Schema.defineElement(this, 'refund_count');
        Schema.defineElementArray(this, 'out_refund_no_', true);
        Schema.defineElementArray(this, 'refund_id_', true);
        Schema.defineElementArray(this, 'refund_channel_', true);
        Schema.defineElementArray(this, 'refund_fee_');
        Schema.defineElementArray(this, 'settlement_refund_fee_');
        Schema.defineElementTwoDimensionalArray(this, 'coupon_type_', true);
        Schema.defineElementArray(this, 'coupon_refund_fee_');
        Schema.defineElementArray(this, 'coupon_refund_count_');
        Schema.defineElementTwoDimensionalArray(this, 'coupon_refund_id_', true);
        Schema.defineElementTwoDimensionalArray(this, 'coupon_refund_fee_');
        Schema.defineElementArray(this, 'refund_status_', true);
        Schema.defineElementArray(this, 'refund_account_', true);
        Schema.defineElementArray(this, 'refund_recv_accout_', true);
        Schema.defineElementArray(this, 'refund_success_time_', true);
    }
}

class ShortUrlRequest extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'appid');
        Schema.defineElement(this, 'mch_id');
        Schema.defineElement(this, 'long_url');
        Schema.defineElement(this, 'nonce_str');
        Schema.defineElement(this, 'sign');
        Schema.defineElement(this, 'sign_type');
    }
}

class ShortUrlResponse extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'return_code', true);
        Schema.defineElement(this, 'return_msg', true);
        Schema.defineElement(this, 'appid', true);
        Schema.defineElement(this, 'mch_id', true);
        Schema.defineElement(this, 'nonce_str', true);
        Schema.defineElement(this, 'sign', true);
        Schema.defineElement(this, 'result_code', true);
        Schema.defineElement(this, 'err_code', true);
        Schema.defineElement(this, 'err_code_des', true);
    }
}

class RefundNotification extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'return_code', true);
        Schema.defineElement(this, 'return_msg', true);
        Schema.defineElement(this, 'appid', true);
        Schema.defineElement(this, 'mch_id', true);
        Schema.defineElement(this, 'nonce_str', true);
        Schema.defineElement(this, 'req_info', true);
        Schema.defineElement(this, 'transaction_id', true);
        Schema.defineElement(this, 'out_trade_no', true);
        Schema.defineElement(this, 'refund_id', true);
        Schema.defineElement(this, 'out_refund_no', true);
        Schema.defineElement(this, 'total_fee');
        Schema.defineElement(this, 'settlement_total_fee');
        Schema.defineElement(this, 'refund_fee');
        Schema.defineElement(this, 'settlement_refund_fee');
        Schema.defineElement(this, 'refund_status', true);
        Schema.defineElement(this, 'success_time', true);
        Schema.defineElement(this, 'refund_recv_accout', true);
        Schema.defineElement(this, 'refund_account', true);
        Schema.defineElement(this, 'refund_request_source', true);

    }
}

class RefundNotificationResponse extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'return_code', true);
        Schema.defineElement(this, 'return_msg', true);
    }
}

module.exports = {
    UnifiedOrderRequest,
    UnifiedOrderResponse,
    OrderQueryRequest,
    OrderQueryResponse,
    UnifiedOrderNotification,
    UnifiedOrderNotificationResponse,
    CloseOrderRequest,
    CloseOrderResponse,
    RefundRequest,
    RefundResponse,
    RefundQueryRequest,
    RefundQueryResponse,
    ShortUrlRequest,
    ShortUrlResponse,
    RefundNotification,
    RefundNotificationResponse
};
