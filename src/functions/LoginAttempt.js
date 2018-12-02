import axios from 'axios'
import { Representatives } from '../Fake Data/Representatives'
import * as firebase from 'firebase'


// var config = {
//     apiKey: "<API_KEY>",
//     authDomain: "<PROJECT_ID>.firebaseapp.com",
//     databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
//     storageBucket: "<BUCKET>.appspot.com",
//   };
//   firebase.initializeApp(config);




export function LoginAttempt(user, pass) {
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then((response) => {
    //         users: response.data
    //     })
    //     .catch(error => {
    //         console.alert(response.error)
    //     });
    const usersArray = Object.values(Representatives)
    uName = 0;
    uPass = 0;
    for (i = 0 ; i < usersArray.length ; i++){
        const User = usersArray[i]
        if ( User.email == user.toLowerCase())
            uName = 1;
        else
            uName = 0;

        if (User.password == pass)
            uPass = 1;
        else
            uPass = 0;

        if (uName == 1 & uPass == 1) {
            return true
        }
    }
    return false
}
