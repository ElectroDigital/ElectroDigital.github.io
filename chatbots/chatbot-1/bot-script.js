var botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Welcome to ElectroDigital E-Commerce Website Sign Up'
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
        text: 'How do I sign up?',
        value: 'how'
      },
      {
        text: 'Will my password be shared with the developer?',
        value: 'password'
      },
      {
        text: 'What is the need to sign up?',
        value: 'what'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "how") {
    message = 'Please go back to the sign up page and then fill your Email and Password in the respective fields and then click on Register. You will be registered and then redirectd to Login Page.<br><a href="https://electrodigital.github.io/index.html">Sign Up Page</a>';
  }
  else if (res.value === "password") {
    message = 'No. The developer has used Google Firebase Authentication API which does not show yor password to the developer. Only your registered email will be shown.<br><a href="https://electrodigital.github.io/index.html">Sign Up Page</a>';
  }
  else if (res.value === "what") {
    message = 'You need to Sign Up so that the Owner as well as the Developer can come to know about your use of this Website.<br><a href="https://electrodigital.github.io/index.html">Sign Up Page</a>';
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
      message = 'Cool! I hope this chatbot might have solved your problems. Thanks and Continue Shopping.<br><a href="https://electrodigital.github.io/index.html">Sign Up Page</a>';
    }
  
    return botui.message.add({
      type: 'html',
      delay: 1000,
      loading: true,
      content: message
    });
  })