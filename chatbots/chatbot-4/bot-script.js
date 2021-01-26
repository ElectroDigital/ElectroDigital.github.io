var botui = new BotUI('help-bot');

botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Welcome to ElectroDigital E-Commerce Website About and Contact Page'
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
        text: 'Who is the founder of this Company?',
        value: 'who'
      },
      {
        text: 'When did this Company start?',
        value: 'whenstart'
      },
      {
        text: 'How can I contact this Company?',
        value: 'howcon'
      },
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "who") {
    message = 'The Founder of this Company is <strong>Darsh Serathia</strong>. He is the developer of this website as well.<br><img src="developer.jpg" width="100px" alt="Img of Darsh Serathia"><br><a href="https://electrodigital.github.io/infocon.html">About and Contact Page</a>';
  }
  else if (res.value === "whenstart") {
    message = 'This Company started in December 2020.<br><a href="https://electrodigital.github.io/infocon.html">About and Contact Page</a>';
  }
  else if (res.value === "howcon") {
    message = 'You can contact us through various ways <br>     1) By our offcial email - websitedeveloper2020.in@gmail.com<br><br>     2) By filling up the form on our About and Conatct Page<br><a href="https://electrodigital.github.io/infocon.html">About and Contact Page</a>';
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
      message = 'Cool! I hope this chatbot might have solved your problems. Thanks and Continue Shopping.<br><a href="https://electrodigital.github.io/infocon.html">About and Contact Page</a>';
    }
  
    return botui.message.add({
      type: 'html',
      delay: 1000,
      loading: true,
      content: message
    });
  })