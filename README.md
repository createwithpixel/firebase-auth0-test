# firebase-auth0-test
Firebase integration with Auth0 test using ExpressJS

Based on the official: https://github.com/auth0-samples/auth0-javascript-samples **Login Sample**

## Installation
* Initialize a Firebase project locally.
* Add a Web App to your Firebase project in the Console.
* Clone the repo on the public folder.
* Create a file called config.js with the following content:

```
const AUTH0_API_AUDIENCE_URL = '<YOUR AUTH0 API AUDIENCE URL>';
const AUTH0_API_AUDIENCE_FUNCTION = '/<YOUR FIREBASE CLOUD FUNCTION NAME>/';
const FIREBASE_CONFIG = <YOUR FIREBASE PROJECT WEB APP CONFIG OBJECT>
```

* Save the config.js file in the public/js folder.

* Create a file called auth_config.json with the following content:

```
{
  "domain": "<YOUR AUTH0 APP DOMAIN>",
  "clientId": "<YOUR AUTH0 APP CLIENT ID>"
}
```

* Save the auth_config.json file in the public folder.

* Run:
    > npm install
    
    > firebase deploy --only hosting

**NOTE:** The deployment URL should be configured in your Auth0 app as Allowed Callback URL, Allowed Logout URL and Allowed Web Origin

**NOTE:** This was tested with the following cloud function repo: https://github.com/createwithpixel/firebase-auth0-cloud-function

**NOTE:** If you want to run locally, generate HTTPS certificates in the public folder and add another alias different than _localhost_ for _127.0.0.1_ to your etc/hosts file.
