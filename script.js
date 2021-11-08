//ITEM HANDLER----FUNCTIONS-------------------------------
function productQuantity(product){
    let phoneQuantity = document.getElementById(product +"Quantity");
    let totalQuantity = parseInt(phoneQuantity.value);
        return totalQuantity;
 };

 function productQuantityNamount(product, isIncrease){
    let  quantityNumber = productQuantity(product);
            // totalQuantity = quantityNumber + 1;
            let totalQuantity = quantityNumber;
                if(isIncrease == true){
                    totalQuantity = quantityNumber+1;
                }
                else if (isIncrease == false && quantityNumber > 0){
                    totalQuantity = quantityNumber - 1; 
                }
                 document.getElementById(product + "Quantity").value = totalQuantity;
                // let totalPrice = totalQuantity * 1219;
                let totalPrice = 0;
                if(product == "phone"){
                    totalPrice = totalQuantity * 1219;
                }
                if (product == "case"){
                    totalPrice = totalQuantity * 59;
                }
                document.getElementById(product + "Price").innerText = totalPrice;
                                    subtotal();
};


function subtotal(){
    let   totalPhone = productQuantity("phone");

    let   totalCase = productQuantity("case");

   let subtotal = totalPhone * 1219 + totalCase * 59;
       document.getElementById("subtotal").innerText = subtotal;   
    
    let tax = Math.round(subtotal * .1);
        document.getElementById("tax").innerText = tax;

    let lastAmount = subtotal + tax ;
        document.getElementById("total").innerText = lastAmount;   
};


function itemRemove(id){
    document.getElementById(id).style.display = "none";
};


// SECOND ITEM HANDLER---------------FUNCTIONS-------------------------
// function secondItemQuantityNamount(isIncrease){
//     let quantity = document.getElementById("secondItemQuantity");
//             quantityNumber = parseInt(quantity.value);
//             // totalQuantity = quantityNumber + 1;
//             let totalQuantity = quantityNumber;
//                 if(isIncrease == true){
//                     totalQuantity = quantityNumber+1;
//                 }
//                 else if (isIncrease == false && quantityNumber > 0){
//                     totalQuantity = quantityNumber - 1; 
//                 }
//                  quantity.value = totalQuantity;
//                 let totalPrice =totalQuantity * 59;
//                 document.getElementById("secondItemPrice").innerText = totalPrice;
// }
 


// function quantityMinus(id){
//     let decreaseQuantity = document.getElementById(id).defaultValue;
//                 quantityNumber = parseFloat(decreaseQuantity);
//                 totalQuantity = quantityNumber - 1;
//                     document.getElementById(id).defaultValue = totalQuantity;
// }

// function increaseAmount(id){
//     let currentAmount = document.getElementById(id).innerText;
//             currentAmountNumber = parseFloat(currentAmount);
//                 totalPrice = currentAmountNumber + 1219;
//                     document.getElementById(id).innerText = totalPrice;
// }


// MINUS BUTTON HANDLER----FUNCTIONS-------------------------------



// function decreaseAmount(id){
//     let currentAmount = document.getElementById(id).innerText;
//                 currentAmountNumber = parseFloat(currentAmount);
//                     totalPrice = currentAmountNumber - 1219;
//                         document.getElementById(id).innerText = totalPrice;
// }

// ITEMS REMOVE CONTROL-------------FUNCTIONS------------------------------

// function itemRemove(id){
//     document.getElementById(id).style.display = "none";
        
// };

// // PLUS BUTTON EVENT HANDLER---------------------------------------------

// let plusQuantity = document.getElementById("firstItemPlus");
// plusQuantity.addEventListener("click", function(){
//     quantityIncrease("firstItemQuantity");
//     increaseAmount("firstItemPrice");
//     increaseAmount("subtotal");
//     increaseAmount("total");
// });

// // MINUS BUTTON EVENT HANDLER-------------------------------------------------
// let minusQuantity = document.getElementById("firstItemMinus");
//      minusQuantity.addEventListener("click", function(){
//          quantityMinus("firstItemQuantity");
//          decreaseAmount("firstItemPrice");
//          decreaseAmount("subtotal");
//          decreaseAmount("total");
// });
// // REMOVE ITEM HANDLER-----------------
//     let removeItem = document.getElementById("firstItem");
//         removeItem.addEventListener("click", function(){
//             itemRemove("product1");
//         });

// // ----------------------SECOND ITEM---------------------------------FUNCTION---------------

// // PLUS BUTTON EVENT HANDLER---------------------------------------------

// let secondItemPlusQuantity = document.getElementById("secondItemPlus");
// secondItemPlusQuantity.addEventListener("click", function(){
//     quantityIncrease("secondItemQuantity");
//     increaseAmount("secondItemPrice");
//     increaseAmount("subtotal");
//     increaseAmount("total");
// });

// // MINUS BUTTON EVENT HANDLER-------------------------------------------------
// let secondItemMinusQuantity = document.getElementById("secondItemMinus");
//      secondItemMinusQuantity.addEventListener("click", function(){
//          quantityMinus("secondItemQuantity");
//          decreaseAmount("secondItemPrice");
//          decreaseAmount("subtotal");
//          decreaseAmount("total");
// });
// // REMOVE ITEM HANDLER-----------------
// let removeSecondItem = document.getElementById("secondItem");
// removeSecondItem.addEventListener("click", function(){
//     itemRemove("product2");
// });
