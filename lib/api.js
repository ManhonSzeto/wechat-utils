const axios = require('axios');

async function _getJson(url) {
    const result = await axios({
        method: 'get',
        url: url
    });
    return result.data;
}

async function _postJson(url, jsonParam) {
    const result = await axios({
        method: 'post',
        url: url,
        data: jsonParam
    });
    return result.data;
}

// MPBase Api

{
    async function getAccessToken(appID, appSecret) {
        const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appSecret}`;
        return await _getJson(url);
    }

    async function getJSAPITicket(accessToken) {
        const url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${accessToken}&type=jsapi`;
        return await _getJson(url);
    }

    async function getCallbackIP(accessToken) {
        const url = `https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token=${accessToken}`;
        return await _getJson(url);
    }

    module.exports.MPBase = {
        getAccessToken,
        getJSAPITicket,
        getCallbackIP
    };
}

// Menu Api

{
    async function create(accessToken, menuData) {
        const url = ` https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${accessToken}`;
        return await _postJson(url, menuData);
    }

    async function get(accessToken) {
        const url = `https://api.weixin.qq.com/cgi-bin/menu/get?access_token=${accessToken}`;
        return await _getJson(url);
    }

    async function del(accessToken) {
        const url = `https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=${accessToken}`;
        return await _getJson(url);
    }


    module.exports.Menu = {
        create,
        get,
        del
    };
}

// Payment Api

{
    const PayMessage = require('./pay_message');

    async function _paymentBaseFunction(url, responseClass, xmlParam) {
        const result = await axios({
            method: 'post',
            url: url,
            data: xmlParam
        });
        const response = new responseClass();
        response.fromString(result.data);
        return response;
    }

    async function unifiedOrder(xml) {
        return await _paymentBaseFunction(
            'https://api.mch.weixin.qq.com/pay/unifiedorder',
            PayMessage.UnifiedOrderResponse,
            xml
        );
    }

    async function orderQuery(xml) {
        return await _paymentBaseFunction(
            'https://api.mch.weixin.qq.com/pay/orderquery',
            PayMessage.OrderQueryResponse,
            xml
        );
    }

    async function closeOrder(xml) {
        return await _paymentBaseFunction(
            'https://api.mch.weixin.qq.com/pay/closeorder',
            PayMessage.CloseOrderResponse,
            xml
        );
    }

    async function refund(xml) {
        return await _paymentBaseFunction(
            'https://api.mch.weixin.qq.com/secapi/pay/refund',
            PayMessage.RefundResponse,
            xml
        );
    }

    async function refundQuery(xml) {
        return await _paymentBaseFunction(
            'https://api.mch.weixin.qq.com/pay/refundquery',
            PayMessage.RefundQueryResponse,
            xml
        );
    }

    async function shortUrl(xml) {
        return await _paymentBaseFunction(
            'https://api.mch.weixin.qq.com/tools/shorturl',
            PayMessage.ShortUrlResponse,
            xml
        );
    }

    module.exports.Payment = {
        unifiedOrder,
        orderQuery,
        closeOrder,
        refund,
        refundQuery,
        shortUrl
    };
}
