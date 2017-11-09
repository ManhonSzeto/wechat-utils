const crypto = require('crypto');

function _sha1(str) {
    const generator = crypto.createHash('sha1');
    generator.update(str);
    return generator.digest('hex');
}

function _md5(str) {
    const generator = crypto.createHash('md5');
    generator.update(str);
    return generator.digest('hex');
}

function mapSign(data) {
    let keyArray = [];
    for (let key in data) {
        keyArray.push(key);
    }
    keyArray = keyArray.sort();

    let str = '';

    for (let i = 0; i < keyArray.length; ++i) {
        if (i !== 0) {
            str += '&';
        }
        str += `${keyArray[i]}=${data[keyArray[i]]}`;
    }
    return _sha1(str);
}

function paySign(data, key) {
    let keyArray = [];
    for (let k in data) {
        keyArray.push(k);
    }
    keyArray = keyArray.sort();

    let str = '';

    for (let i = 0; i < keyArray.length; ++i) {
        if (i !== 0) {
            str += '&';
        }
        str += `${keyArray[i]}=${data[keyArray[i]]}`;
    }

    str += `&key=${key}`;

    return _md5(str).toUpperCase();
}

function arraySign(data) {
    const orderedArray = data.sort();
    let str = '';
    for (const value of orderedArray) {
        str += value;
    }
    return _sha1(str);
}

module.exports = {
    arraySign,
    mapSign,
    paySign
};
