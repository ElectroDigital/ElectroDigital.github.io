var botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Welcome to ElectroDigital E-Commerce Website Shop Page'
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
        text: 'What are the different categories of ElectroDigital E-Commerce?',
        value: 'whatcat'
      },
      {
        text: 'How many Products are there in each categories?',
        value: 'howpro'
      },
      {
        text: 'Does it offer add to cart system?',
        value: 'docart'
      },
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "whatcat") {
    message = 'ElectroDigital has the following categories-<br>     1)Mobiles<br>      2)Televisions<br>     3)Air Conditioners<br>      4)Accesories<br>     5)Tablets<br>      6)Printers<br>     7)Laptops<br>      8)Data-Storage<br>     9)Camera<br>      10)Wi-Fi<br><a href="https://electrodigital.github.io/shop.html">Shopping Page Page</a>';
  }
  else if (res.value === "howpro") {
    message = 'This website has 320 products with 10 categories having 32 products each.<br><a href="https://electrodigital.github.io/shop.html">Shopping Page</a>';
  }
  else if (res.value === "docart") {
    message = 'Yes it does offer Cart System, just to one category then go to the product you want and click on the add to cart button. Then go to cart page you will get your items there with price and identification number.<br><a href="https://electrodigital.github.io/infocon.html">About and Contact Page</a>';
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
      message = 'Cool! I hope this chatbot might have solved your problems. Thanks and Continue Shopping.<br><a href="https://electrodigital.github.io/shop.html">Shopping Page</a>';
    }
  
    return botui.message.add({
      type: 'html',
      delay: 1000,
      loading: true,
      content: message
    });
  })