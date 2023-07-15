//Coding assignment for Week 5.
//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.

//created the first class.
class MenuItem {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getInfo() {
      return `Name: ${this.name}, Price: ${this.price}`;
    }
  }
  
  //created the second class and the array.
  class Menu {
    constructor() {
      this.menuItems = [];
    }
  
    //added option to create item.
    createItem(name, price) {
      const newItem = new MenuItem(name, price);
      this.menuItems.push(newItem);
      console.log(`Created new menu item: ${newItem.getInfo()}`);
    }
  
    //added option to view item.
    viewMenu() {
      if (this.menuItems.length === 0) {
        console.log('Menu is empty.');
      } else {
        console.log('Menu:');
        this.menuItems.forEach((item, index) => {
          console.log(`${index + 1}. ${item.getInfo()}`);
        });
      }
    }
  
    //added option to delete item.
    deleteItem(index) {
      if (index >= 0 && index < this.menuItems.length) {
        const deletedItem = this.menuItems.splice(index, 1)[0];
        console.log(`Deleted menu item: ${deletedItem.getInfo()}`);
      } else {
        console.log('Invalid menu item index.');
      }
    }
  }
  
  // Usage example:
  const menu = new Menu();
  
  menu.createItem('Burger', 9.99);
  menu.createItem('Pizza', 12.99);
  menu.createItem('Salad', 7.99);
  
  menu.viewMenu();
  
  menu.deleteItem(1);
  
  menu.viewMenu();

  