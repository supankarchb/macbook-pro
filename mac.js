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
const newGrandTotal = document.getElementById('grand-total');

function updateTotalPricing(){

    const extraMemoryCharge = parseInt (memoryCostingField.innerText);
    const extraSsdCharge = parseInt( extarSsdCosting.innerText);
    const deliveryCharge = parseInt( shippingFeild.innerText);

    const grandTotal = 1299 + extraMemoryCharge + extraSsdCharge + deliveryCharge;
    totalPricing.innerText = grandTotal; 
    const newGrandTotals = grandTotal;
    newGrandTotal.innerText = newGrandTotals;
};
function verifyPromoCode(){
    const typedpromocode = document.getElementById('enter-promo-code').value;

    if(typedpromocode == 'stevekaku'){
        newGrandTotal.innerText = parseInt(totalPricing.innerText) - (( parseInt(totalPricing.innerText))*(20 / 100));
        typedpromocode.inner = '';
    }
}