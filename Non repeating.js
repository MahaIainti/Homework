var string = "У попа была собака ";
var letters = {};
var str = string.replace (/[^а-я ё ^a-z]]/ig, '');
var str = str.replace (/[  ]/ig, '');
var arr = str.split('');
var result = arr.filter(function(v) {
   	return !letters[v] || letters[v] == 1;
});
console.log(result[0]);

