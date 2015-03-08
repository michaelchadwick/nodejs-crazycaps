var clc = require('cli-color')
var args = process.argv.slice(2);
var orig_strings = [];
var crazy_strings = [];

args.forEach(function (val, index, array) {
  orig_strings.push(val);
  new_string = [];
  
  for (var i = 0, len = val.length; i < len; i++)
  {
    if (Math.round(Math.random()) == 0)
    {
      new_string[i] = val[i].toLowerCase();
    }
    else
    {
      new_string[i] = val[i].toUpperCase();
    }
  }
  
  crazy_strings.push(new_string.join(''));

});

console.log(clc.blue(crazy_strings.join(' ')));