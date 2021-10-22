/* Given a url encoded string of key-value pairs, turns it into a JS object with following rules:
* %20 represents a space character
* Key-value pairs are represented using an = character: key=value
* Multiple key-value pairs are separated using a & character: key1=value1&key2=value */

const urlDecode = text => {
  let result = {};
  let newText = '';
  let arr1 = [], arr2 = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '%') {
      newText += ' '; //replace '%20' with a whitespace
      i += 2;
    }
    else {
      newText += text[i];
    }  
  }
  arr1 = newText.split('&')
  for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i].split('=')) //split into four arrays
  }

  for(let i = 0; i < arr2.length; i++) {
    for(let j = 0; j < arr2[i].length; j++) {
      result[arr2[i][0]] = arr2[i][1] //populate object with keys & values
    }
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/*expected output:
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain" */