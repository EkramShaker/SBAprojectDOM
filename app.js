let selectedCake = '';

function selectCake(cakeName) {
    selectedCake = cakeName;
    alert(`${cakeName} selected!`);
}

function placeOrder() {
    const flavor = document.getElementById('flavor').value;
    const toppings = Array.from(document.getElementById('toppings').selectedOptions).map(option => option.value);
    
    if (!selectedCake) {
        alert('Please select a cake first!');
        return;
    }

    const orderDetails = `
        <p><strong>Cake:</strong> ${selectedCake}</p>
        <p><strong>Flavor:</strong> ${flavor}</p>
        <p><strong>Toppings:</strong> ${toppings.join(', ')}</p>
    `;

    document.getElementById('order-details').innerHTML = orderDetails;
    alert('Order placed successfully!');
}
