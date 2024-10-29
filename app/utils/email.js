const eeClient = require("elasticemail-webapiclient").client;

const options = {
  apiKey: process.env.ELASTIC_EMAIL_API_KEY,
  apiUri: "https://api.elasticemail.com/",
  apiVersion: "v2",
};

const EE = new eeClient(options);

// Load account data
EE.Account.Load().then(function (resp) {
  console.log(resp);
});

const emailParams = {
  subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  to: "vaw.site.2024@gmail.com",
  from: "vaw.site.2024@gmail.com",
  replyTo: "vaw.site.2024@gmail.com",
  body:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Curabitur in lectus id ipsum laoreet dignissim in ut odio. Duis volutpat arcu dolor, eu cursus mi vestibulum ut." +
    " Etiam eu ipsum orci. Vestibulum aliquam eros in massa dapibus malesuada. Proin sit amet blandit nulla, eu porttitor neque." +
    " Duis consequat erat est, sit amet condimentum turpis sagittis sit amet. Nam fringilla, tellus ac euismod elementum," +
    " ipsum ante consequat nisi, ut lobortis arcu sapien vel ex. Mauris sit amet magna a ipsum porttitor hendrerit." +
    " Nam elementum iaculis tellus, nec euismod ante. Suspendisse nec lobortis magna, at placerat augue." +
    " Quisque luctus scelerisque metus, ut facilisis mi consectetur vel. Ut augue diam, ornare dictum tincidunt a," +
    " volutpat nec arcu. Mauris iaculis bibendum pulvinar. Quisque vestibulum, magna quis aliquam tincidunt," +
    " leo eros luctus nibh, eu dictum nisl velit id mauris.",
  fromName: "John Doe",
  bodyType: "Plain",
};

// Send email
EE.Email.Send(emailParams).catch((err) => {
  throw new Error(err);
});
