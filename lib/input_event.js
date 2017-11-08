const Schema = require('./message_schema').Schema;

class Subscribe extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'EventKey', true);
        Schema.defineElement(this, 'Ticket', true);
    }
}

class Unsubscribe extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
    }
}

class Scan extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'EventKey', true);
        Schema.defineElement(this, 'Ticket', true);
    }
}

class Location extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'Latitude');
        Schema.defineElement(this, 'Longitude');
        Schema.defineElement(this, 'Precision');
    }
}

class Click extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'EventKey', true);
    }
}

class View extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'EventKey', true);
    }
}

class ScancodePush extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'EventKey', true);
        Schema.defineChildElement(this, 'ScanCodeInfo',
            'ScanType');
        Schema.defineChildElement(this, 'ScanCodeInfo',
            'ScanResult');
    }
}

class ScancodeWaitmsg extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'EventKey', true);
        Schema.defineChildElement(this, 'ScanCodeInfo',
            'ScanType');
        Schema.defineChildElement(this, 'ScanCodeInfo',
            'ScanResult');
    }
}

class PicSysphoto extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'EventKey', true);
    }
}

class PicPhotoOrAlbum extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'EventKey', true);
    }
}

class PicWeixin extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'EventKey', true);
    }
}

class LocationSelect extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'EventKey', true);
        Schema.defineChildElement(this, 'SendLocationInfo',
            'Location_X');
        Schema.defineChildElement(this, 'SendLocationInfo',
            'Location_Y');
        Schema.defineChildElement(this, 'SendLocationInfo',
            'Scale');
        Schema.defineChildElement(this, 'SendLocationInfo',
            'Label');
        Schema.defineChildElement(this, 'SendLocationInfo',
            'Poiname');
    }
}

class CardPassCheck extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'CardId', true);
    }
}

class UserGetCard extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'CardId', true);
        Schema.defineElement(this, 'IsGiveByFriend');
        Schema.defineElement(this, 'UserCardCode', true);
        Schema.defineElement(this, 'OuterId');
        Schema.defineElement(this, 'OuterStr', true);
    }
}

class UserDelCard extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'CardId', true);
        Schema.defineElement(this, 'UserCardCode', true);
    }
}

class UserConsumeCard extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'CardId', true);
        Schema.defineElement(this, 'UserCardCode', true);
        Schema.defineElement(this, 'ConsumeSource', true);
        Schema.defineElement(this, 'OutTradeNo', true);
        Schema.defineElement(this, 'TransId', true);
        Schema.defineElement(this, 'LocationId', true);
        Schema.defineElement(this, 'StaffOpenId', true);
    }
}

class UserPayFromPayCell extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'CardId', true);
        Schema.defineElement(this, 'UserCardCode', true);
        Schema.defineElement(this, 'TransId', true);
        Schema.defineElement(this, 'LocationId', true);
        Schema.defineElement(this, 'Fee', true);
        Schema.defineElement(this, 'OriginalFee', true);
    }
}

class UserViewCard extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'CardId', true);
        Schema.defineElement(this, 'UserCardCode', true);
        Schema.defineElement(this, 'OuterStr', true);
    }
}

class UserEnterSessionFromCard extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'CardId', true);
        Schema.defineElement(this, 'UserCardCode', true);
    }
}

class UpdateMemberCard extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'CardId', true);
        Schema.defineElement(this, 'UserCardCode', true);
        Schema.defineElement(this, 'ModifyBonus');
        Schema.defineElement(this, 'ModifyBalance');
    }
}

class CardSkuRemind extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'CardId', true);
        Schema.defineElement(this, 'Detail', true);
    }
}

class CardPayOrder extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'OrderId', true);
        Schema.defineElement(this, 'Status', true);
        Schema.defineElement(this, 'CreateOrderTime');
        Schema.defineElement(this, 'PayFinishTime');
        Schema.defineElement(this, 'Desc', true);
        Schema.defineElement(this, 'FreeCoinCount', true);
        Schema.defineElement(this, 'PayCoinCount', true);
        Schema.defineElement(this, 'RefundFreeCoinCount', true);
        Schema.defineElement(this, 'RefundPayCoinCount', true);
        Schema.defineElement(this, 'OrderType', true);
        Schema.defineElement(this, 'Memo', true);
        Schema.defineElement(this, 'ReceiptInfo', true);
    }
}

class SubmitMembercardUserInfo extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Event', true);
        Schema.defineElement(this, 'CardId', true);
        Schema.defineElement(this, 'UserCardCode', true);
    }
}

module.exports = {
    Subscribe,
    Unsubscribe,
    Scan,
    Location,
    Click,
    View,
    ScancodePush,
    ScancodeWaitmsg,
    PicSysphoto,
    PicPhotoOrAlbum,
    PicWeixin,
    LocationSelect,
    CardPassCheck,
    UserGetCard,
    UserDelCard,
    UserConsumeCard,
    UserPayFromPayCell,
    UserViewCard,
    UserEnterSessionFromCard,
    UpdateMemberCard,
    CardSkuRemind,
    CardPayOrder,
    SubmitMembercardUserInfo
};
