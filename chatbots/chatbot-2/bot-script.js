var botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Welcome to ElectroDigital E-Commerce Website Login'
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'How can I help?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'How do I login?',
        value: 'how'
      },
      {
        text: 'It is showing error - No such user found',
        value: 'nouser'
      },
      {
        text: 'It is showing error - Wrong password/User does not have a password',
        value: 'wrong'
      },
      {
        text: 'What is the need to login?',
        value: 'what'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "how") {
    message = 'Please go back to the Login page and then fill your Registered Email and Password in the respective fields and then click on Login. You will be registered and then redirectd to Login Page.<br><a href="https://electrodigital.github.io/login.html">Login Page</a>';
  }
  else if (res.value === "wrong") {
    message = 'The password which you have entered must would not match with the registered password. Please fill the form to get an email for new password change - <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=jX15een1I0eG8wXzQoyAWmRMCf7hNSRIsjQTj457I4NUOVFXUjhLME5CR01ZNFJEVDczTU9KU00zOC4u">Change Password Form</a>';
  }
  else if (res.value === "what") {
    message = 'You need to Login so that the Owner as well as the Developer can come to know about your use of this Website and when you last used it.<br><a href="https://electrodigital.github.io/login.html">Login Page</a>';
  }
  else if (res.value === "nouser") {
    message = 'The email you have entered must not be registered. Please try your other email or <a href="https://electrodigital.github.io/index.html">Sign Up.</a><br><a href="https://electrodigital.github.io/login.html">Login Page</a>';
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function () {
    return botui.message.add({
      delay: 500,
      loading: true,
      content: 'Still have Problems?'
    });
  }).then(function () {
    return botui.action.button({
      action: [
        {
          text: 'Yes',
          value: 'yes'
        },
        {
          text: 'No',
          value: 'no'
        }
      ]
    });
  }).then(function (res) {
    var message;
  
    if (res.value === "yes") {
      message = 'Sorry but yet I do not have AI so please fill out your doubt in the form so that we can contact you and solve your problem! <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=jX15een1I0eG8wXzQoyAWmRMCf7hNSRIsjQTj457I4NURFhWQ1NIUkQ5UzlEVEpTTDNPN0dZUDVCNi4u">Link to the Form</a>';
    }
    else if (res.value === "no") {
      message = 'Cool! I hope this chatbot might have solved your problems. Thanks and Continue Shopping.<br><a href="https://electrodigital.github.io/login.html">Login Page</a>';
    }
  
    return botui.message.add({
      type: 'html',
      delay: 1000,
      loading: true,
      content: message
    });
  })