// navigation burger menu
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
}

// sticky header scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// submit button event with input validator
document.getElementById("eventForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop the form from submitting immediately

    // get form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const guest = document.getElementById("guest").value;
    const outlet = document.getElementById("outlet").value;
    const date = document.getElementById("eventDate").value;
    const message = document.getElementById("message").value.trim();

    // basic validation
    if (!name || !phone || !email || !guest || !outlet || !date ) {
      alert("Please fill in all required fields.");
      return;
    }

    // email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // store data in localStorage
    const formData = {
      name: name,
      phone: phone,
      email: email,
      guest: guest,
      outlet: outlet,
      date: date,
      message: message,
      submittedAt: new Date().toLocaleString()
    };

    localStorage.setItem("eventInquiry", JSON.stringify(formData));

    // redirect to thank you page
    window.location.href = "thank-you.html";
});
