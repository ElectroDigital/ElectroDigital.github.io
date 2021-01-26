var botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Welcome to ElectroDigital E-Commerce Website Home Page'
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
        text: 'How many products are there in ElectroDigital E-Commerce?',
        value: 'how'
      },
      {
        text: 'What does ElectroDigital E-Commerce sell?',
        value: 'whatsell'
      },
      {
        text: 'What is the icon for home page?',
        value: 'whatico1'
      },
      {
        text: 'What is the icon for about and contact page?',
        value: 'whatico2'
      },
      {
        text: 'What is the icon for shopping page?',
        value: 'whatico3'
      },
      {
        text: 'What is the icon for cart page?',
        value: 'whatico4'
      },
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "how") {
    message = 'There are 320 products over 10 different categories in this e-commerce website.<br><a href="https://electrodigital.github.io/home.html">Home Page</a>';
  }
  else if (res.value === "whatsell") {
    message = 'ElectroDigital E-Commerce sells electronic goods like mobiles, TVs, Tablets, Accesories etc.<br><a href="https://electrodigital.github.io/home.html">Home Page</a>';
  }
  else if (res.value === "whatico1") {
    message = 'The icon for Home Page is -<i class="fa fa-home"></i><br><a href="https://electrodigital.github.io/home.html">Home Page</a>';
  }
  else if (res.value === "whatico2") {
    message = 'The icon for About and Contact Page is -<i class="fa fa-phone-square"></i><br><a href="https://electrodigital.github.io/home.html">Home Page</a>';
  }
  else if (res.value === "whatico3") {
    message = 'The icon for Shopping Page is -<i class="fa fa-archive"></i><br><a href="https://electrodigital.github.io/home.html">Home Page</a>';
  }
  else if (res.value === "whatico4") {
    message = 'The icon for Cart Page is -<i class="fa fa-shopping-cart"></i><br><a href="https://electrodigital.github.io/home.html">Home Page</a>';
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
      message = 'Cool! I hope this chatbot might have solved your problems. Thanks and Continue Shopping.<br><a href="https://electrodigital.github.io/home.html">Home Page</a>';
    }
  
    return botui.message.add({
      type: 'html',
      delay: 1000,
      loading: true,
      content: message
    });
  })