document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Grab the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // For demonstration purposes, log the inputs to the console
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    
    // Reset form fields after submission
    event.target.reset();
    
    alert("Thank you for your message! We'll get back to you soon.");
});
