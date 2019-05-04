class ShoppingCart {
    constructor(){  } 
    getItems(){
        return []
    }
       
    addItem(itemName, quantity, price){
        new class Item  {
           constructor (itemName, quantity, price) {
            this.name = itemName
            this.quantity = quantity
            this.pricePerUnit = price
            }
            
        }
      
        
    }
   
}
        
     

 
 


    

module.exports = ShoppingCart