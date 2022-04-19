console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket=[];
const maxItems=5;

function addItem(item){
   if(isFull()){
   return false;
   }
   else{
    basket.push(item);
    return true;
   }
}

function isFull(){
    if(basket.length>=5){
        return true
    }
    return false;
}

function removeItem(item){
   if(basket.indexOf(item)>-1){
    basket.splice(basket.indexOf(item), 1,);
    return item;
   }
    return null;
   }
   
   function listItems(array){
    for(i=0; i<=array.length-1; i++){
        console.log(array[i]);
    }
}

function empty(array){
    array.splice(0, array.length)
    console.log('Basket:', array)
}

console.log('Adding Apple should show true:', addItem('Apple'));
console.log('Adding Banana should show true:', addItem('Banana'));
console.log('Adding Orange should show true:', addItem('Orange'));
console.log('Adding Pear should show true:', addItem('Pear'));
console.log('Adding Plum should show true:', addItem('Plum'));

console.log(basket);
console.log('Testing listItems function:')
listItems(basket);

console.log('Testing my empty basket function:')
empty(basket);

addItem('Spaghetti Noodles');
addItem('Ravioli');
addItem('Alfredo Sauce');
addItem('Parmesan Cheese');
addItem('Eggs');

console.log(basket)
console.log('Testing my isFull function-')
console.log('Should show true since 5 items in cart:', isFull());
console.log('Adding Kiwi should show false because our carts full:', addItem('Kiwi'));
console.log('Testing removeItem with item in cart, should show Ravioli:', removeItem('Ravioli'))
console.log(basket);
console.log('Testing removeItem with a item not in cart, should show null:', removeItem('Apple'));


console.log(basket);
console.log('Trying isFull with 4 items in cart, should show false:',isFull());
console.log('Adding Apple should show true:', addItem('Apple'));
console.log(basket);




