import { createContext, ReactNode, useEffect, useState } from "react";

import { firebase } from "../services/firebase/firebase";
import { getDatabase, ref, set, onValue } from "firebase/database";
export const DbContext = createContext({});




export function DbContextProvider(props){
  


 async function writeUserData(userId, name, email, imageUrl, cel , city ,gen, cpf , end ,password , state) {
    const db = getDatabase();
    set(ref(db, 'userClient' + userId), {
      nome: name,
      email: email,
      profile_picture : imageUrl,
      cpf: cpf,
      password: password,
      phoneNumber: cel,
      endereco: end,
      city: city,
      gen:gen,
      state: state
  
  
    });
  }

  return(
    <DbContext.Provider value={{writeUserData}}>
      {props.children}
    </DbContext.Provider>
  )
  

}