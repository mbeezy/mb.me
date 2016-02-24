/* */ 
'use strict';
var redefineAll = require("./_redefine-all"),
    getWeak = require("./_meta").getWeak,
    anObject = require("./_an-object"),
    isObject = require("./_is-object"),
    anInstance = require("./_an-instance"),
    forOf = require("./_for-of"),
    createArrayMethod = require("./_array-methods"),
    $has = require("./_has"),
    arrayFind = createArrayMethod(5),
    arrayFindIndex = createArrayMethod(6),
    id = 0;
var uncaughtFrozenStore = function(that) {
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function() {
  this.a = [];
};
var findUncaughtFrozen = function(store, key) {
  return arrayFind(store.a, function(it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry)
      return entry[1];
  },
  has: function(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry)
      entry[1] = value;
    else
      this.a.push([key, value]);
  },
  'delete': function(key) {
    var index = arrayFindIndex(this.a, function(it) {
      return it[0] === key;
    });
    if (~index)
      this.a.splice(index, 1);
    return !!~index;
  }
};
module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function(that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._i = id++;
      that._l = undefined;
      if (iterable != undefined)
        forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      'delete': function(key) {
        if (!isObject(key))
          return false;
        var data = getWeak(key);
        if (data === true)
          return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      has: function has(key) {
        if (!isObject(key))
          return false;
        var data = getWeak(key);
        if (data === true)
          return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true)
      uncaughtFrozenStore(that).set(key, value);
    else
      data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};
