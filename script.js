// Newsletter
const forms = document.querySelectorAll(".newsletter form");

forms.forEach(function(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = form.querySelector("input").value.trim();

        if (email === "") {
            alert("Please enter your email address.");
            return;
        }

        alert("Thanks for joining the Paceline club!");
        form.querySelector("input").value = "";
    });
});


// Product filters
const buttons = document.querySelectorAll(".filters button");
const products = document.querySelectorAll(".product-card");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const filter = button.textContent;

        products.forEach(function(product) {
            if (filter === "All" || product.dataset.category === filter) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});