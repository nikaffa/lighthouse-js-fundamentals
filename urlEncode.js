//Converting the whitespaces withing the string to '%20'
const urlEncode = text => {
  let newText = '';
  text = text.trim(); //remove whitespace from both ends of the given string
  for (let i = 0; i < text.length; i++) {
    if ((text[i]) === ' ') {
      newText += '%20'; //replace a char with '%20', then add to the new string
    }
    else {
      newText += text[i];
    }
  }
  return newText;
};