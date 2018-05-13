"use strict";

var DriftBottle = function () {
   LocalContractStorage.defineMapProperty(this, "arrayMap");
   LocalContractStorage.defineMapProperty(this, "dataMap");
   LocalContractStorage.defineProperty(this, "size");
};

DriftBottle.prototype = {
    init: function () {
        this.size = 0;
    },

    set: function (key, value) {
        var index = this.size;
        this.arrayMap.set(index, key);
        this.dataMap.set(key, value);
        this.size +=1;
    },

    get: function (key) {
        return this.dataMap.get(key);
    },

    len:function(){
      return this.size;
    },

    getRandom:function () {
        var index = Math.floor(Math.random() * this.size);
        var key = this.arrayMap.get(index);
        var object = this.dataMap.get(key);
        var result = {
            index:index,
            key:key,
            value:object
        };
        return JSON.stringify(result);
    },

    forEach: function(limit, offset){
        limit = parseInt(limit);
        offset = parseInt(offset);
        if(offset>this.size){
           throw new Error("offset is not valid");
        }
        var number = offset+limit;
        if(number > this.size){
          number = this.size;
        }
        var result  = [];
        for(var i=offset;i<number;i++){
            var key = this.arrayMap.get(i);
            var object = this.dataMap.get(key);
            var temp={
                index:i,
                key:key,
                value:object
            };
            result.push(temp);
        }
        return JSON.stringify(result);
    }
};

module.exports = DriftBottle;
