/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  'Stuff'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  x Pass the function an array as it's only argument.

  x Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  x Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// Adding menu component to the header div
const header = document.querySelector('.header');
header.prepend(createMenu(menuItems))


// Function for creating menu, from array of menu items 
function createMenu(array){
  // create elements
  const menu = document.createElement('div');
  const list = document.createElement('ul');

  // add classes
  menu.classList.add('menu');
  
  // iterating over array create an li for each array element, setting text content also
  array.forEach(function(item){
    // create li for each item
    let listItem = document.createElement('li');
    // append li to list (defined above)
    list.appendChild(listItem);
    // set text content to item (passed in from array);
    listItem.textContent = `${item}`;
  });

  // Append list to menu
  menu.appendChild(list);


  const menuBtn = document.querySelector('.menu-button')
  menuBtn.addEventListener('click', event => menu.classList.toggle('menu--open'))

  
// click handler to close menu if clicking outside:

  const outsideMenu = document.querySelector('.articles');
  console.log(outsideMenu);
  // outsideMenu.style.backgroundColor = 'red';
  outsideMenu.addEventListener('click', event => menu.classList.remove('menu--open'));
  // outsideMenu.forEach(function(area){
  //   area.addEventListener('click',event=>menu.classList.remove('menu--open'))
  // })

  console.log(menu);
  return menu;
}





