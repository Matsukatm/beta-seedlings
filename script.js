// Variables
const unitPrice = 5; // Set the price for one seedling
const deliveryFee = 10; // Set the delivery fee

// Function to open the pop-up
function openPopup() {
    document.getElementById("orderPopup").style.display = "flex";
}

// Function to close the pop-up
function closePopup() {
    document.getElementById("orderPopup").style.display = "none";
}

// Event listener for the quantity input field to update the price automatically
document.getElementById("quantity").addEventListener("input", updatePrice);

function updatePrice() {
    const quantity = document.getElementById("quantity").value; // Get the quantity from the input field
    const totalPrice = quantity * unitPrice; // Multiply the quantity by the unit price
    const finalAmount = totalPrice + deliveryFee; // Add the delivery fee to the total price

    // Update the displayed price in the pop-up
    document.getElementById("total-price").textContent = totalPrice;
    document.getElementById("final-amount").textContent = finalAmount;
}

// Handle Payment Method Change (Mpesa or Cash on Delivery)
document.getElementById("payment-method").addEventListener("change", handlePaymentMethodChange);

function handlePaymentMethodChange() {
    const paymentMethod = document.getElementById("payment-method").value;

    const mpesaPhoneContainer = document.getElementById("mpesa-phone-container");
    const proceedToPayContainer = document.getElementById("proceed-to-pay-container");
    const paymentDetailsContainer = document.getElementById("payment-details-container");
    const cashOnDeliveryContainer = document.getElementById("cash-on-delivery-container");

    // Show or hide fields based on the selected payment method
    if (paymentMethod === "mpesa") {
        mpesaPhoneContainer.style.display = "block"; // Show phone number field for Mpesa
        proceedToPayContainer.style.display = "block"; // Show "Proceed to Pay" button for Mpesa
        paymentDetailsContainer.style.display = "none"; // Hide payment details section initially
        cashOnDeliveryContainer.style.display = "none"; // Hide Cash on Delivery message
    } else {
        mpesaPhoneContainer.style.display = "none"; // Hide phone number field
        proceedToPayContainer.style.display = "none"; // Hide "Proceed to Pay" button
        paymentDetailsContainer.style.display = "none"; // Hide payment details section
        cashOnDeliveryContainer.style.display = "block"; // Show Cash on Delivery message
    }
}

// Show the payment details for Mpesa when the user clicks "Proceed to Pay"
function showPaymentDetails() {
    const paymentDetailsContainer = document.getElementById("payment-details-container");
    paymentDetailsContainer.style.display = "block"; // Show payment details for Mpesa
}

// Confirm Payment for Mpesa
function confirmPayment() {
    const mpesaPhone = document.getElementById("mpesa-phone").value;
    const mpesaAmount = document.getElementById("mpesa-amount").value;
    const mpesaMethod = document.getElementById("mpesa-method").value;

    // Ensure phone number and amount are provided
    if (!mpesaPhone || !mpesaAmount) {
        alert("Please provide both phone number and amount.");
        return;
    }

    // Process the payment (this can be replaced with your actual payment processing logic)
    alert(`Payment confirmed!\nPhone: ${mpesaPhone}\nAmount: ${mpesaAmount}\nPayment Method: ${mpesaMethod}`);

    // Optionally, close the popup or proceed with the next step
    closePopup(); // Close the popup after confirming payment
}

// Handle Order Form Submission
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    const quantity = document.getElementById("quantity").value;
    const paymentMethod = document.getElementById("payment-method").value;
    const deliveryLocation = document.getElementById("delivery-location").value;

    const finalAmount = document.getElementById("final-amount").textContent;

    // Display an alert with the order details
    alert(`Order Placed!\nQuantity: ${quantity}\nPayment: ${paymentMethod}\nDelivery Location: ${deliveryLocation}\nTotal: ${finalAmount}`);

    // Close the pop-up after submitting the form
    closePopup();
});
