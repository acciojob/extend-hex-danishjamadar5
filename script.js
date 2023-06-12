const extendedHex=shortHex=> '#'+(shortHex.slice(shortHex.startsWith('#') ? 1:0).split('').map((curEle) =>curEle+curEle).join(''));
const shortHex = prompt("Enter Short Hex.");
alert(extendedHex(shortHex));


// const extendHex = (shortHex) => {
//   const hex = shortHex.replace('#', '').toLowerCase();
//   const colorComponents = hex.split('');
//   const fullHex = colorComponents
//     .map((component) => component.repeat(2))
//     .join('');

//   return `#${fullHex}`;
// };

// // Testing the function
// const shortHex = prompt("Enter Short Hex.");
// alert(extendHex(shortHex));