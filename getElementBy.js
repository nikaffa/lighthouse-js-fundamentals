//by id
let elm = document.getElementById('info');
elm.innerHTML = 'JavaScript Rocks';

//by id change property, delay running code for 1 sec
let elm = document.getElementById('lhl-logo').width = '200';
elm = function() {
	document.getElementById('lhl-logo').width = '400';
};
setTimeout(elm, 1000);

//by the ID using the `querySelector`method, set a new attribute
document.querySelector('#name').setAttribute('placeholder', '100');

//by tag
let elm = document.getElementsByTagName('p')
alert(elm[0].innerHTML);

//by class
let names = [];
let array = document.getElementsByClassName('name');
for (let i of array) {
	names.push(i.innerHTML);
}
alert(names);

//onclick event using selector
/* html code input:
<button id='my-button' onclick="buttonClicked('#my-button')">
  Click Me!
</button>
*/
function buttonClicked(selector){
  alert('The ' + selector + ' button has been clicked.');
}