const _ = require('lodash');
const Schema = require('./message_schema').Schema;

class Text extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime', false);
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'Content', true);
    }
}

class Image extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime', false);
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineChildElement(this, 'Image', 'MediaId');
    }
}

class Voice extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime', false);
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineChildElement(this, 'Voice', 'MediaId');
    }
}

class Video extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime', false);
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineChildElement(this, 'Video', 'MediaId');
        Schema.defineChildElement(this, 'Video', 'Title');
        Schema.defineChildElement(this, 'Video', 'Description');
    }
}

class Music extends Schema {
    constructor() {
        super();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime', false);
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineChildElement(this, 'Music', 'Title');
        Schema.defineChildElement(this, 'Music', 'Description');
        Schema.defineChildElement(this, 'Music', 'MusicUrl');
        Schema.defineChildElement(this, 'Music', 'HQMusicUrl');
        Schema.defineChildElement(this, 'Music', 'ThumbMediaId');
    }
}

class News extends Schema {
    constructor() {
        super();
        this._holder.xml.Articles = {};
        this.clearArticles();
        Schema.defineElement(this, 'ToUserName', true);
        Schema.defineElement(this, 'FromUserName', true);
        Schema.defineElement(this, 'CreateTime', false);
        Schema.defineElement(this, 'MsgType', true);
        Schema.defineElement(this, 'ArticleCount', false);

    }

    get Articles() {
        const result = [];
        for (let article of this._holder.xml.Articles.item) {
            result.push({
                Title: article.Title,
                Description: article.Description,
                PicUrl: article.PicUrl,
                Url: article.Url
            });
        }
        return result;
    }

    addArticle(title, description, picUrl, url) {
        const article = {};
        if (title !== null && title !== undefined) {
            article.Title = {
                __cdata: title
            };
        }

        if (!_.isNil(description)) {
            article.Description = {
                __cdata: description
            };
        }

        if (!_.isNil(picUrl)) {
            article.PicUrl = {
                __cdata: picUrl
            };
        }

        if (!_.isNil(url)) {
            article.Url = {
                __cdata: url
            };
        }

        this._holder.xml.Articles.item.push(article);
    }

    clearArticles() {
        this._holder.xml.Articles.item = [];
    }
}

module.exports = {
    Text,
    Image,
    Voice,
    Video,
    Music,
    News
};
