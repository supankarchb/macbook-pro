// function memoryCosting(quantityMemory,price){

//     const extraEightgbmemoryCosting = document.getElementById(quantityMemory + '-gb-memory');
//     const memoryCostingField = document.getElementById('extra-memory-cost');
//     memoryCostingField.innerText = price;
//     updateTotalPricing();
   

// }
// document.getElementById('eight-gb-memory').addEventListener('click', function(){

//     memoryCosting('eight',0);
// })
// document.getElementById('sixteen-gb-memory').addEventListener('click', function(){

//     memoryCosting('sixteen',180);
// })


// function getInputValue(quantityMemory){
//     const productInput = document.getElementById(quantityMemory + '-gb-memory');
//     const productNumber = parseInt(productInput.value);
//     return productNumber;


const extraEightgbmemoryCosting = document.getElementById('eight-gb-memory');
const extraSixteengbmemoryCosting = document.getElementById('sixteen-gb-memory');
const memoryCostingField = document.getElementById('extra-memory-cost');

extraEightgbmemoryCosting.addEventListener('click', function(){

    memoryCostingField.innerText = '0';
    updateTotalPricing();

})
extraSixteengbmemoryCosting.addEventListener('click', function(){

    memoryCostingField.innerText = '180';
    updateTotalPricing();

});
const baseSsdCosting = document.getElementById('base-ssd-storage');
const halfOfOneTeraCosting = document.getElementById('halfofonetera-ssd-storage');
const oneTeraCosting = document.getElementById('onetera-ssd-storage');
const extarSsdCosting= document.getElementById('extra-ssd-cost');


baseSsdCosting.addEventListener('click', function(){

    extarSsdCosting.innerText = '0';
    updateTotalPricing();

})
halfOfOneTeraCosting.addEventListener('click', function(){

    extarSsdCosting.innerText = '100';
    updateTotalPricing();
})

oneTeraCosting.addEventListener('click', function(){

    extarSsdCosting.innerText = '180';
    updateTotalPricing();

})

const freeDelivey = document.getElementById('free-delivery');
const chargedDelivery = document.getElementById('extra-delivery-added');
const shippingFeild = document.getElementById('extra-deliverycost-added');

freeDelivey.addEventListener('click', function(){

    shippingFeild.innerText = '0';
    updateTotalPricing();

})
chargedDelivery.addEventListener('click', function(){
    shippingFeild.innerText = '20';
    updateTotalPricing();

});

const totalPricing = document.getElementById('total-pricing');

function updateTotalPricing(){

    const extraMemoryCharge = parseInt (memoryCostingField.innerText);
    const extraSsdCharge = parseInt( extarSsdCosting.innerText);
    const deliveryCharge = parseInt( shippingFeild.innerText);

    const grandTotal = 1299 + extraMemoryCharge + extraSsdCharge + deliveryCharge;
    totalPricing.innerText = grandTotal; 
}
