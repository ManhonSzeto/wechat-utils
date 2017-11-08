const _ = require('lodash');

class CustomMessageSchema {
    constructor(openID, customServiceAccount = null) {
        this._holder = {
            touser: openID
        };
        if (_.isNil(customServiceAccount)) {
            this._holder.customservice = {
                kf_account: customServiceAccount
            }
        }
    }

    json() {
        return this._holder;
    }
}

class Text extends CustomMessageSchema {
    constructor(openID, text, customServiceAccount = null) {
        super(openID, customServiceAccount);
        this._holder.msgtype = 'text';
        this._holder.text = {
            content: text
        };
    }
}

class Image extends CustomMessageSchema {
    constructor(openID, mediaID, customServiceAccount = null) {
        super(openID, customServiceAccount);
        this._holder.msgtype = 'image';
        this._holder.image = {
            media_id: mediaID
        }
    }
}

class Voice extends CustomMessageSchema {
    constructor(openID, mediaID, customServiceAccount = null) {
        super(openID, customServiceAccount);
        this._holder.msgtype = 'voice';
        this._holder.voice = {
            media_id: mediaID
        }
    }
}

class Video extends CustomMessageSchema {
    constructor(openID, mediaID, thumbMediaID, customServiceAccount = null) {
        super(openID, customServiceAccount);
        this._holder.msgtype = 'video';
        this._holder.video = {
            media_id: mediaID,
            thumb_media_id: thumbMediaID
        }
    }

    set title(value) {
        this._holder.video.title = value;
    }

    set description(value) {
        this._holder.video.description = value;
    }
}

class Music extends CustomMessageSchema {
    constructor(openID, musicURL, HQMusicURL, thumbMediaID,
        customServiceAccount = null) {
        super(openID, customServiceAccount);
        this._holder.msgtype = 'music';
        this._holder.music = {
            musicurl: musicURL,
            hqmusicurl: HQMusicURL,
            thumb_media_id
        }
    }

    set title(value) {
        this._holder.music.title = value;
    }

    set description(value) {
        this._holder.music.description = value;
    }
}

class News extends CustomMessageSchema {
    constructor(openID, customServiceAccount = null) {
        super(openID, customServiceAccount);
        this._holder.msgtype = 'news';
        this._holder.news = {
            articles: []
        }
    }

    addNews(title, description, url, picURL) {
        let testTarget = false;

        const newsObj = {};

        if (!_.isNil(title)) {
            newsObj.title = title;
            testTarget = true;
        }

        if (!_.isNil(description)) {
            newsObj.description = description;
            testTarget = true;
        }

        if (!_.isNil(url)) {
            newsObj.url = url;
            testTarget = true;
        }

        if (!_.isNil(picURL)) {
            newsObj.picurl = picURL;
            testTarget = true;
        }

        if (testTarget) {
            this._holder.news.articles.push(newsObj);
        }
    }
}

class MPNews extends CustomMessageSchema {
    constructor(openID, mediaID, customServiceAccount = null) {
        super(openID, customServiceAccount);
        this._holder.msgtype = 'mpnews';
        this._holder.mpnews = {
            media_id: mediaID
        }
    }
}

class WechatCard extends CustomMessageSchema {
    constructor(openID, cardID, customServiceAccount = null) {
        super(openID, customServiceAccount);
        this._holder.msgtype = 'wxcard';
        this._holder.wxcard = {
            card_id: cardID
        }
    }
}

module.exports = {
    Text,
    Image,
    Voice,
    Video,
    Music,
    News,
    MPNews,
    WechatCard
};
