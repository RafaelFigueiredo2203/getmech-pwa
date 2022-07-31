
import { useState, createContext, useEffect } from 'react';
import  firebase  from '../services/firebase/firebase';
import { toast } from 'react-toastify';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, deleteUser } from "firebase/auth";
import { Redirect, useHistory, useParams } from 'react-router-dom';

export const AuthContext = createContext();

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [ordem, setOrdem] = useState([]);
 
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

  }, []);


  async function loadPerfilEmp(){
    let uid = user?.uid;

    const userProfile = await firebase.firestore().collection('userEmp')
    .doc(uid).get();
    
    let data = {
      uid: uid,
      nome: userProfile.data().nome,
      email: user?.email,
      urlPhoto: userProfile.data().urlPhoto,
      phoneNumber: userProfile.data().phoneNumber,
      city: userProfile.data().city,
      state: userProfile.data().state,
      cnpj: userProfile.data().cnpj,
      end: userProfile.data().end

    };
    
   
    setUser(data);
    storageUser(data);

  }

  async function loadPerfilClient(){
    let uid = user?.uid;

    const userProfile = await firebase.firestore().collection('userClient')
    .doc(uid).get();
    
    let data = {
      uid: uid,
      nome: userProfile.data().nome,
      email: user?.email,
      urlPhoto: userProfile.data().urlPhoto,
      phoneNumber: userProfile.data().phoneNumber,
      city: userProfile.data().city,
      state: userProfile.data().state,
      cpf: userProfile.data().cpf,
      end: userProfile.data().end,
      googleAccount:userProfile.data().googleAccount
    };
    
   
    setUser(data);
    storageUser(data);

  }

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
        state: userProfile.data().state,
        googleAccount:userProfile.data().googleAccount,
        end: userProfile.data().end

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
        cnpj: userProfile.data().cnpj,
        end: userProfile.data().end

      };
      
      toast.success('🚀 Entrou com sucesso!');
      setUser(data);
      storageUser(data);
      setIsAuthenticatedEmp(true);
      setLoadingAuth(false);
     history.push('/dashboard-emp')
      


    })
    .catch((error)=>{
      if(!error != null){
      console.log(error);
     
      setLoadingAuth(false);
      }
    })

  } 


  async function loadOrdens(){
    await firebase.firestore().collection('services')
    .where("state", "==", user.state).where("city", "==", user.city)
    .where("orderDisponibility", "==", true)
    .onSnapshot((doc)=>{

      let ordens = [];

      doc.forEach((ordem)=>{
      ordens.push({
      id:ordem.id,
      ano: ordem.data().ano,
      city: ordem.data().city,
      description:ordem.data().description,
      email:ordem.data().email,
      marca: ordem.data().marca,
      modelo: ordem.data().modelo,
      nome: ordem.data().nome,
      phoneNumber: ordem.data().phoneNumber,
      state: ordem.data().state,
      tipo: ordem.data().tipo,
      urlPhoto: ordem.data().urlPhoto,

    })
  });
 setOrdem(ordens);
 
    })

    }

   
  

  function storageUser(data, date,ordem){
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('ordens', JSON.stringify(ordem));
    
    
  }



  //Logout do usuario
  async function signOut(){
    await firebase.auth().signOut();
    setIsAuthenticatedUser(false);
    setIsAuthenticatedEmp(false);
    localStorage.removeItem('user');
    localStorage.removeItem('ordens');
    localStorage.removeItem('ordemId');
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
          googleAccount:true,
          uid:result.user.uid,
          urlPhoto:result.user.photoURL
        
        

    })

    let data = {
      uid:result.user.uid,
      nome: result.user.displayName,
      email: result.user.email,
      googleAccount:true,
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
   loadOrdens,
   ordem,
   loadPerfilEmp,
   loadPerfilClient,
   
      
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
