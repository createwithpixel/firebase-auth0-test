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
            .then(() => {
                console.log("Signed in FIREBASE!");

                // Grab user data and update Firebase
                auth0.getUser().then(userAuth0 => {
                    firebase.auth().currentUser.updateEmail(userAuth0.email);
                    firebase.auth().currentUser.updateProfile({ displayName: userAuth0.name });
                    console.log("Updated Firebase user");
                });
            })
            .catch(error => {
                console.log(error)
            });
    });
};