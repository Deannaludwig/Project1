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


var run = function() {
	
	var output = document.getElementById('result');
	output.innerHTML = 'the average score is ' + avg;
};

var elem = document.getElementById('runner');
elem.onclick = run;

