document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('orderForm');
    const receipt = document.getElementById('receipt');
    const previewBtn = document.getElementById('previewBtn');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (confirm('Are you sure you want to submit your order?')) {
            generateReceipt();
            alert('Thank you for ordering! Your order has been submitted.\nDelivery fee varies from ₦1,500 – ₦3,000 depending on your location.\nAccount details for payment will be sent to your WhatsApp.');
            form.reset();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    previewBtn.addEventListener('click', function () {
        generateReceipt();
    });

    function generateReceipt() {
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const address = document.getElementById('address').value;
        const deliveryDate = document.getElementById('deliveryDate').value;
        const deliveryTime = document.getElementById('deliveryTime').value;

        let cupcakes = [];
        document.querySelectorAll('.cupcake-type').forEach(cup => {
            if (cup.checked) {
                cupcakes.push(cup.value);
            }
        });

        const cupcakeSize = document.getElementById('cupcakeSize').value;
        const cupcakeQuantity = document.getElementById('cupcakeQuantity').value;

        const cakeType = document.getElementById('cakeType').value;
        const cakeSize = document.getElementById('cakeSize').value;
        const cakeQuantity = document.getElementById('cakeQuantity').value;

        const loafType = document.getElementById('loafType').value;
        const loafSize = document.getElementById('loafSize').value;
        const loafQuantity = document.getElementById('loafQuantity').value;

        let receiptHTML = `
            <h2>Order Receipt</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Preferred Delivery Date:</strong> ${deliveryDate}</p>
            <p><strong>Preferred Delivery Time:</strong> ${deliveryTime}</p>
            <hr>
        `;

        if (cupcakes.length > 0) {
            receiptHTML += `<p><strong>Cupcake Flavors:</strong> ${cupcakes.join(', ')}</p>`;
            receiptHTML += `<p><strong>Cupcake Size:</strong> ${cupcakeSize}</p>`;
            receiptHTML += `<p><strong>Quantity:</strong> ${cupcakeQuantity}</p>`;
            receiptHTML += `<hr>`;
        }

        if (cakeType !== '') {
            receiptHTML += `<p><strong>Cake Type:</strong> ${cakeType}</p>`;
            receiptHTML += `<p><strong>Cake Size:</strong> ${cakeSize}</p>`;
            receiptHTML += `<p><strong>Quantity:</strong> ${cakeQuantity}</p>`;
            receiptHTML += `<hr>`;
        }

        if (loafType !== '') {
            receiptHTML += `<p><strong>Loaf Type:</strong> ${loafType}</p>`;
            receiptHTML += `<p><strong>Loaf Size:</strong> ${loafSize}</p>`;
            receiptHTML += `<p><strong>Quantity:</strong> ${loafQuantity}</p>`;
            receiptHTML += `<hr>`;
        }

        receipt.innerHTML = receiptHTML;
    }
});
