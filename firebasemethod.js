import app from '../firebase/firebaseinitialization'
import { getDatabase, ref, set, onValue} from "firebase/database";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";


const auth = getAuth(app);
const database = getDatabase(app);

 let userSignup =(obj)=>{
   let {email, password } = obj
   return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        const user = userCredential;
        const reference = ref(database,  `user/${new Date().getTime().toString()}`, user)
         set(reference,obj)
        }).then(()=>{
            resolve(console.log("sucessfull user created in database"))
        } ).catch((error)=>{
            console.log(error)
        })
   })
   .catch((error)=>{
     console.log(error)
   })
  
   
 } 

let loginUser =(obj)=>{
    let { email, password } = obj;
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const reference = ref(database, `user/${new Date().getTime().toString()}`, user);
          onValue(reference, (e) => {
            console.log(e.val())
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          reject(errorMessage);
        });
    });
  };


  export default {userSignup, loginUser} ;
