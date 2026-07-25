const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
    "service_d72njk8",   // ✅ New Service ID
    "template_yc2er2m",
    templateParams
)
    .then(function () {

        alert("✅ Message Sent Successfully!");

        contactForm.reset();

    })
    .catch(function (error) {

        console.log(error);

        alert("❌ Failed to send message.");

    });

});