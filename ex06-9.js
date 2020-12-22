function txtchange1() {
  document.getElementById('txt1').innerHTML = 'ナンバーワン!';  
}
function imgchange1() {
  document.getElementById('logo').src = './image/josai.png';    
}
function show_innerHTMLtxt1(){
  var result1 = document.getElementById('txt1').innerHTML;
alert(result1);    
}

function show_innerHTML(){
  var result = document.getElementById('logo').innerHTML;
alert(result);    
}