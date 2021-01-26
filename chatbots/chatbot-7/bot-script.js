var botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Welcome to ElectroDigital E-Commerce Website Confirm & Place Order Page'
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
        text: 'My Items are not loading properly',
        value: 'noload'
      },
      {
        text: 'It is showing No Products Found',
        value: 'nopro'
      },
      {
        text: 'How to proceed to order the items?',
        value: 'howproc'
      },
      {
        text: 'Why do I have to fill the form?',
        value: 'whyform'
      },
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "noload") {
    message = 'You might have disabled Javascript or that might be a Browser error.<br><a href="https://electrodigital.github.io/placeorder.html">Confirm & Place Order Page</a>';
  }
  else if (res.value === "nopro") {
    message = 'You might have not added any thing in the cart. Please go back to Shop Page and go to an item page, to click on add to cart, to add it to the cart.<br><a href="https://electrodigital.github.io/placeorder.html">Confirm & Place Order Page</a>';
  }
  else if (res.value === "howproc") {
    message = 'To proceed please fill the form and click on Place Order, you will receive its bill on the next day in your email.<br><a href="https://electrodigital.github.io/placeorder.html">Confirm & Place Order</a>';
  }
  else if (res.value === "whyform") {
    message = 'On filling the form and then clicking on continue, will allow the developer to see the order and the personel details.<br><a href="https://electrodigital.github.io/placeorder.html">Confirm & Place Order</a>';
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
      message = 'Cool! I hope this chatbot might have solved your problems. Thanks and Continue Shopping.<br><a href="https://electrodigital.github.io/placeorder.html">Confirm and Order Page</a>';
    }
  
    return botui.message.add({
      type: 'html',
      delay: 1000,
      loading: true,
      content: message
    });
  })