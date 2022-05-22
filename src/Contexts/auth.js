
import { useState, createContext, useEffect } from 'react';
import  firebase  from '../services/firebase/firebase';
import { toast } from 'react-toastify';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { Redirect, useHistory } from 'react-router-dom';

export const AuthContext = createContext();

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const [isAuthenticatedEmp, setIsAuthenticatedEmp] = useState(false);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const history = useHistory();

 
  


  useEffect(()=>{

    function loadStorage(){
      const storageUser = localStorage.getItem('user');

      if(storageUser){
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
  
      setLoading(false);
    }
    
    loadStorage();

  }, [])



  //Fazendo login do usuario
  async function signIn(email, password){
    setLoadingAuth(true);

    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value)=> {
      
      let uid = value.user.uid;

      const userProfile = await firebase.firestore().collection('userClient')
      .doc(uid).get();
      
      let data = {
        uid: uid,
        nome: userProfile.data().nome,
        email: value.user.email,
        urlPhoto: userProfile.data().urlPhoto,
        phoneNumber: userProfile.data().phoneNumber,
        city: userProfile.data().city,
        state: userProfile.data().state

      };
      
      toast.success('🚀 Entrou com sucesso!');
      setUser(data);
      storageUser(data);
      setIsAuthenticatedUser(true);
      setLoadingAuth(false);


    })
    .catch((error)=>{
      if(!error != null){
      console.log(error);
     
      setLoadingAuth(false);
      }
    })

  }


  async function signInEmp(email, password){
    setLoadingAuth(true);
    
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value)=> {
      
      let uid = value.user.uid;

      const userProfile = await firebase.firestore().collection('userEmp')
      .doc(uid).get();
      
      let data = {
        uid: uid,
        nome: userProfile.data().nome,
        email: value.user.email,
        urlPhoto: userProfile.data().urlPhoto,
        phoneNumber: userProfile.data().phoneNumber,
        city: userProfile.data().city,
        state: userProfile.data().state,
        cnpj: userProfile.data().cnpj

      };
      
      toast.success('🚀 Entrou com sucesso!');
      setUser(data);
      storageUser(data);
      setIsAuthenticatedEmp(true);
      setLoadingAuth(false);
     
      


    })
    .catch((error)=>{
      if(!error != null){
      console.log(error);
     
      setLoadingAuth(false);
      }
    })

  }


 


  function storageUser(data, date, cpF,cnpj){
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('uid',(date).toString());

  }



  //Logout do usuario
  async function signOut(){
    await firebase.auth().signOut();
    setIsAuthenticatedUser(false);
    setIsAuthenticatedEmp(false);
    localStorage.removeItem('user');
    localStorage.removeItem('uid');
    localStorage.removeItem('Photo');
    localStorage.removeItem('nome');
   
    setUser(null);
    
    toast.success('🚀Saiu!');
  }
    function SignGoogle(){
  const auth = getAuth();
      setLoadingAuth(true);
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    

    firebase.firestore().collection('userClient')
    .doc(result.user.uid)
    .set({
          nome:result.user.displayName,
          email:result.user.email,
         
          uid:result.user.uid,
          urlPhoto:result.user.photoURL
          

    })

    let data = {
      uid:result.user.uid,
      nome: result.user.displayName,
      email: result.user.email,
      urlPhoto: result.user.photoURL
     

    };
    
    


    toast.success('🚀 Entrou com sucesso!');
    // The signed-in user info.
    setUser(data);
    storageUser(data);
    setLoadingAuth(false);
   
    // ...
  }).catch((error) => {

    
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}




  return(
    <AuthContext.Provider 
    value={{ 
      signed: !!user, 
      user, 
      loading, 
      signOut,
      signIn,
      signInEmp,
      loadingAuth,
      SignGoogle,
      storageUser,
      setUser,
    isAuthenticatedUser,
    isAuthenticatedEmp,
   
      
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
