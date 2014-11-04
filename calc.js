var transform = function(f, list){
  var i;
  for(i in list){
      list[i] = f(list[i]);
  }    
   return list;
};

var readNumbers = function(){
  var inputBox = document.getElementById('scores');
  var inputStr = inputBox.value.trim();
  var inputArr = inputStr.split(" ");
  var result = transform(parseInt, inputArr);
  return result[0];
};

var fib = function(number)
{
	var result;
	var x = 0;
	var y = 1;
	
	for(var i = 0; i <= number; i++)
	{
		result = x;
		x = y;
		y = result + x;
	}
	
	return result;
};

var tri = function(n)
{
	var result = 0;
	
	for(var i = 0; i < n; i++)
	{
		result = (n*(n + 1))/2;
	}
	
	return result;
};
var run = function() {
	
	var number = readNumbers();
	var trin = tri(number);
	var fibo = fib(number);
	
	var output = document.getElementById('result');
	output.innerHTML = 'The ' + number + 'th number in the fibanacci sequence is ' + fibo + '. In the triangular sequence the ' + number + 'th is ' + trin + '.';
};

var elem = document.getElementById('runner');
elem.onclick = run;

