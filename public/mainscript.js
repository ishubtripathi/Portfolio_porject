// Toggle icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

});

// JavaScript for toggling the hidden content
const readMoreBtn = document.querySelector('.read-more-btn');
const hiddenContent = document.querySelector('.hidden-content');

readMoreBtn.addEventListener('click', () => {
    hiddenContent.classList.toggle('show-hidden-content');
    readMoreBtn.textContent = hiddenContent.classList.contains('show-hidden-content') ? 'Read Less' : 'Read More';
});

// Validate form fields
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var subject = document.getElementById("subjectOfmsg").value;
    var message = document.getElementById("yourMessage").value;

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneRegex = /^[0-9]{10}$/;

    if (name === "" || email === "" || number === "" || subject === "" || message === "") {
        swal("Incomplete Form", "Please fill in all the required fields.", "warning");
        return false;
    } else if (!email.match(emailRegex)) {
        swal("Invalid Email", "Please enter a valid email address.", "warning");
        return false;
    } else if (!number.match(phoneRegex)) {
        swal("Invalid Phone Number", "Please enter a valid 10-digit phone number.", "warning");
        return false;
    }

    return true;
}

// Send message function
function Send() {
    if (!validateForm()) {
        return;
    }

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var subject = document.getElementById("subjectOfmsg").value;
    var message = document.getElementById("yourMessage").value;

    var body = "Name: " + name + "<br/> Email: " + email + "<br/> Contact: " + number + "<br/> Subject: " + subject + "<br/> Message: " + message;

    // Use the Email.js library to send the email
    Email.send({
        SecureToken: "cd708a0b-4e98-451e-b64e-9ce6a1ed85e8",
        To: 'ishubtripathi@gmail.com',
        From: "shanutripathi3388@gmail.com",
        Subject: subject,
        Body: body
    }).then(
        message => {
            if (message === 'OK') {
                swal("Successful!", "Your message has been sent successfully", "success");
            } else {
                swal("Something Went Wrong", "Your message was not sent. Please try again later.", "error");
            }
        }
    );
}
