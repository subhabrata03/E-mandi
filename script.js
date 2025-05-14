

// your code goes here
document.getElementById('learn-more-btn').addEventListener('click', function() {
    alert('Learn more about e-MANDI! Explore the features that help farmers, retailers, wholesalers, and civilians.');
});

// Dynamic Pricing Table
const pricingTable = document.querySelector('#pricing-table tbody');
const vegetables = [
    { name: 'Tomato', retailPrice: 30, wholesalePrice: 25 },
    { name: 'Potato', retailPrice: 20, wholesalePrice: 15 },
    { name: 'Onion', retailPrice: 40, wholesalePrice: 35 },
    { name: 'Carrot', retailPrice: 50, wholesalePrice: 45 }
];

vegetables.forEach(veg => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${veg.name}</td>
        <td>₹${veg.retailPrice}</td>
        <td>₹${veg.wholesalePrice}</td>
    `;
    pricingTable.appendChild(row);
});

// Vegetable List
const vegetableCards = document.querySelector('#vegetable-cards');
vegetables.forEach(veg => {
    const card = document.createElement('div');
    card.className = 'vegetable-card';
    card.innerHTML = `
        <h3>${veg.name}</h3>
        <p>Retail Price: ₹${veg.retailPrice} per kg</p>
        <p>Wholesale Price: ₹${veg.wholesalePrice} per kg</p>
    `;
    vegetableCards.appendChild(card);
});

// Registration Form Validation
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const userType = document.getElementById('user-type').value;

    if (name === '' || email === '' || userType === '') {
        alert('Please fill out all required fields.');
    } else {
        alert('Registration successful! Welcome to e-MANDI.');
    }
});

// Feedback Form Handling
// document.getElementById('feedback-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const feedbackText = document.getElementById('feedback-text').value;
//     const isComplaint = document.getElementById('complaint').checked;

//     if (feedbackText === '') {
//         alert('Please enter your feedback.');
//     } else {
//         if (isComplaint) {
//             alert('Thank you for your complaint. We will address it as soon as possible.');
//         } else {
//             alert('Thank you for your feedback!');
//         }
//     }
// });

// User Dashboard
const dashboard = document.getElementById('user-dashboard');
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const userType = document.getElementById('user-type').value;

    if (name && userType) {
        dashboard.innerHTML = `
            <h3>Welcome, ${name}</h3>
            <p>User Type: ${userType}</p>
            <p>Here you can manage your account, view your orders, and more.</p>
        `;
    }
});

document.getElementById('logout-btn').addEventListener('click', function() {
    dashboard.innerHTML = '';
    alert('You have logged out successfully.');
});

// Payment Gateway Form Handling
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const cardName = document.getElementById('card-name').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (cardNumber && cardName && expiryDate && cvv) {
        alert('Payment processed successfully. Thank you for your purchase!');
    } else {
        alert('Please fill out all payment details.');
    }
});

function feedbackSubmit() {
    const feedback = document.getElementById("feedback-text").value;
    const user_id = localStorage.getItem("user_id");
    if (!user_id) {
    alert("Please login first.");
    window.location.href("/login/index.html");
    }
    fetch(this.action, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            feedback: feedback,
            user_id: user_id
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.msg);
    })
    .catch(error => console.error(error));
    }
