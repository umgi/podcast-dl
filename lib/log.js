// Generated by CoffeeScript 2.5.1
(function() {
  var add, clear, names, print;

  clear = function() {
    return console.log('\u001b[2J');
  };

  names = {};

  add = function(name, status) {
    if (names[name] == null) {
      names[name] = {};
    }
    names[name] = status;
    return print();
  };

  print = function() {
    var i, j, k, obj, ref, size, v;
    obj = {};
    k = Object.keys(names);
    v = Object.values(names);
    size = k.length;
    for (i = j = 0, ref = size; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
      if (obj[v[i]] == null) {
        obj[v[i]] = {};
      }
      obj[v[i]][k[i]] = true;
    }
    clear();
    return Object.keys(obj).forEach(function(e) {
      return console.log(e, Object.keys(obj[e]));
    });
  };

  module.exports = {
    add: add
  };

}).call(this);
