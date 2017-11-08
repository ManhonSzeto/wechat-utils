const _ = require('lodash');
const Convertor = require('x2js');

class Schema {
    constructor() {
        this._convertor = new Convertor();
        this._holder = {
            xml: {}
        };
    }

    fromString(xmlString) {
        this._holder = this._convertor.xml2js(xmlString);
    }

    fromObject(xmlObject) {
        this._holder = xmlObject;
    }

    toObject() {
        if (_.isNil(this._holder)) {
            throw new Error(`Text holder is not inited`);
            return null;
        }
        return this._holder;
    }

    toString() {
        if (_.isNil(this._holder)) {
            throw new Error(`Text holder is not inited`);
            return null;
        }
        return this._convertor.js2xml(this._holder);
    }

    static defineElementArray(obj, name, isCDATA = false) {
        Object.defineProperty(obj, name, {
            get: function() {
                const array = [];
                for(let i = 0;;++i) {
                    if (!_.isNil(obj._holder.xml[`name${i}`])) {
                        if (isCDATA) {
                            array.push(obj._holder.xml[`name${i}`].toString());
                        } else {
                            array.push(obj._holder.xml[`name${i}`]);
                        }
                    } else {
                        break;
                    }
                }
                return array;
            }
        });
    }

    static defineElementTwoDimensionalArray(obj, name, isCDATA = false) {
        Object.defineProperty(obj, name, {
            get: function() {
                const array = [];
                for(let i = 0;;++i) {
                    const subArray = [];
                    for (let j = 0;;++j) {
                        if (!_.isNil(obj._holder.xml[`name${i}_${j}`])) {
                            if (isCDATA) {
                                subArray.push(obj._holder.xml[`name${i}_${j}`].toString());
                            } else {
                                subArray.push(obj._holder.xml[`name${i}_${j}`]);
                            }
                        } else {
                            break;
                        }
                    }
                    if (subArray.length > 0) {
                        array.push(subArray);
                    } else {
                        break;
                    }
                }
                return array;
            }
        });
    }

    static defineElement(obj, name, isCDATA = false) {
        Object.defineProperty(obj, name, {
            get: function() {
                if (isCDATA) {
                    if (_.isNil(obj._holder.xml[name])) {
                        return obj._holder.xml[name];
                    } else {
                        return obj._holder.xml[name].toString();
                    }
                } else {
                    return obj._holder.xml[name];
                }
            },
            set: function(newValue) {
                if (isCDATA) {
                    if (_.isNil(obj._holder.xml[name])) {
                        obj._holder.xml[name] = {};
                    }
                    obj._holder.xml[name].__cdata = newValue;
                } else {
                    obj._holder.xml[name] = newValue;
                }
            }
        });
    }

    static defineChildElement(obj, father, name) {
        Object.defineProperty(obj, name, {
            get: function() {
                if (!_.isNil(this._holder.xml[father])) {
                    if (!_.isNul(this._holder.xml[father][name])) {
                        return this._holder.xml[father][name].__cdata;
                    }
                } else {
                    return null;
                }
            },
            set: function(newValue) {
                if (_.isNil(this._holder.xml[father])) {
                    this._holder.xml[father] = {};
                }

                if (_.isNil(this._holder.xml[father][name])) {
                    this._holder.xml[father][name] = {};
                }

                this._holder.xml[father][name].__cdata = v;
            }
        });
    }
}

module.exports = {
    Schema
};
