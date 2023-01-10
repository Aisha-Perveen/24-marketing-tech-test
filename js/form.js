function validateForm() {
  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  let name = document.forms['contactForm']['name'].value;
  let email = document.forms['contactForm']['email'].value;
  let message = document.forms['contactForm']['message'].value;

  if (name == '') {
    alert('Name must be filled out');
    return false;
  }

  if (email == '' || !regEmail.test(email)) {
    alert('Please enter a valid e-mail address.');
    return false;
  }

  if (message == '') {
    alert('Please leave a message!');
    return false;
  }
  return true;
}
