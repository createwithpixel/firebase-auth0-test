/**
 * Firebase init
 * 
 * Make sure to add a file config.js with the variables:
 * FIREBASE_CONFIG, AUTH0_API_AUDIENCE_URL and AUTH0_API_AUDIENCE_FUNCTION
 */

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);

// Firebase login with auth0
const firebaseLoginWithAuth0 = (user, accessToken) => {
    // Get Custom Firebase Token from Cloud Function API
    axios({
        method: 'post',
        data: {
            user: user
        },
        baseURL: AUTH0_API_AUDIENCE_URL,
        url: AUTH0_API_AUDIENCE_FUNCTION,
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
    }).then((response) => {
        // Sign in to Firebase
        firebase.auth().signInWithCustomToken(response.data.firebaseToken)
            .then(console.log("Signed in FIREBASE!"))
            .catch(error => {
                console.log(error)
            })
    });
};