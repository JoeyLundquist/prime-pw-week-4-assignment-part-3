console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item){
   basket.push(item);
   return true;
}
console.log(addItem('Apple'));
console.log(addItem('Banana'));
console.log(addItem('Orange'));
console.log(addItem('Pear'));
console.log(addItem('Plum'));
console.log(basket);

