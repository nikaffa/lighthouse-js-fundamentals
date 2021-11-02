//Takes a text string and gives it title casing
const titleCase  = text => {
  let result = [];
  if (text.length > 0) {
    text = text.trim().toLowerCase().split(' ');
    text.forEach(word => {
      let i = word.slice(0, 1).toUpperCase();
      let j = word.slice(1);
      result.push(i + j);
    });
    result = result.join(' ');
  }
  console.log(result);
};

titleCase('');
titleCase('A');
titleCase('this is an example');
titleCase('test');
titleCase('i r cool');
titleCase('WHAT HAPPENS HERE');
