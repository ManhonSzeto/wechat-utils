const Schema = require('./message_schema').Schema;

class Text extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Content', true);
        Schema.defineElement(this, 'MsgId');
    }
}

class Image extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'PicUrl', true);
        Schema.defineElement(this, 'MediaId', true);
        Schema.defineElement(this, 'MsgId');
    }
}

class Voice extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'MediaId', true);
        Schema.defineElement(this, 'Format', true);
        Schema.defineElement(this, 'Recognition', true);
        Schema.defineElement(this, 'MsgId');
    }
}

class Video extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'MediaId', true);
        Schema.defineElement(this, 'ThumbMediaId', true);
        Schema.defineElement(this, 'MsgId');
    }
}

class ShortVideo extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'MediaId', true);
        Schema.defineElement(this, 'ThumbMediaId', true);
        Schema.defineElement(this, 'MsgId');
    }
}

class Location extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Location_X');
        Schema.defineElement(this, 'Location_Y');
        Schema.defineElement(this, 'Scale');
        Schema.defineElement(this, 'Label', true);
        Schema.defineElement(this, 'MsgId');
    }
}

class Link extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime');
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Title', true);
        Schema.defineElement(this, 'Description', true);
        Schema.defineElement(this, 'Url', true);
        Schema.defineElement(this, 'MsgId');
    }
}

module.exports = {
    Text,
    Image,
    Voice,
    Video,
    ShortVideo,
    Location,
    Link
};
