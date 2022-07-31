import  { useContext, useState } from 'react';

import './clienteForm.scss';

import MaskInput from '../../../components/MaskInput.js';
import { useForm } from "react-hook-form";

import firebase from '../../../services/firebase/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import {  toast } from "react-toastify";
import { useHistory , Redirect } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/auth';



const initialValues = {
  cpf:'',
  cnpj: '',
};






export function ClienteForm(){
  const auth = getAuth();
 //use para o que quiser.
 
 const history = useHistory();

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit
  } = useForm();

 
    
   

    const [values,setValues] = useState(initialValues);
  
    
    const [isBusy, setIsBusy] = useState(false);

    function handleChange(event) {
      setValues({
        ...values,
      [event.target.name]: event.target.value
      
      });
    }



    async function onSubmit (data)  {
      setIsBusy(true);
      
     await  createUserWithEmailAndPassword(auth, data.email, data.senha)
      .then((userCredential) => {
        // Signed in
         
        const user = userCredential.user;

        firebase.firestore().collection('userClient')
        .doc(user.uid)
        .set({
          nome:data.nome,
          cpf:data.cpf,
          email:data.email,
          senha:data.senha,
          phoneNumber:data.phoneNumber,
          end:data.end,
          city:data.city,
          gen:data.gen,
          state:data.state,
          uid:user.uid,
          googleAccount:false,
          urlPhoto:data.urlPhoto
          
        })
       .then((data) => {
         toast.success('🚀 Cadastrado com sucesso!');
         
          <Redirect to="/dashboard" />
          history.push('/dashboard');
          
          
        
         // ...
        })
        .catch((error) => {
        toast.error('⭕ E-mail existente ou erro no sistema!');
          history.go(0);
          // ..
        });
       
        // ...
      })
     
      
     
        
    }
    
   
       
    
    

  
  return(
    <div className="form-client">
      <header className=" form-cliente-header">
      
       <h1>Cadastro</h1>
        
      </header>

      <div>
        <section  className="form-cliente" >

          <section>
            <form  onSubmit={handleSubmit(onSubmit)}>
            <label >*Url/Link de uma foto sua:</label>
          <input type="text" name="urlPhoto"  {...register("urlPhoto", { required: "Foto  é obrigatório!" })}
              />
              {errors.urlPhoto && (
                <p style={{ color: "red" }}>{errors.nome.message}</p>
              )}

          <label >*Nome:</label>
          <input type="text" name="nome"  {...register("nome", { required: "Nome  é obrigatório!" })}
              />
              {errors.nome && (
                <p style={{ color: "red" }}>{errors.nome.message}</p>
              )}

          <label >*CPF:</label>
          <MaskInput
              name= "cpf"
              mask= "999.999.999-99"
              
              {...register("cpf", { required: "CPF  é obrigatório!" })}
              />
              {errors.cpf && (
                <p style={{ color: "red" }}>{errors.cpf.message}</p>
              )}

          <label >*E-mail:</label>
          <input type="email" 
              {...register("email",{ required: "E-mail é obrigatório!" })}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}

          <label >*Senha:</label>
          <input type="password" {...register("password", { required: "Senha é obrigatória!", 
              minLength: { value: 8, message: 'Senha não pode ser menor que 8 caracteres.' }
             })}
              
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}

          <label >*Confirmar senha:</label>
          <input type="password"    {...register("senha",{
                required: "Por Favor confirme a senha!",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "As senhas devem corresponder!";
                  }
                }
              })}
            />
            {errors.senha && (
              <p style={{ color: "red" }}>
                {errors.senha.message}
              </p>
            )} 

          <label >*Celular:</label>
          <input type="phone"  
              {...register("phoneNumber", { required: "Número de telefone é obrigatório!" })}
              />
              {errors.phoneNumber && (
                <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
              )}

          <label >Endereço:</label>
          <input type="text" {...register("end")} />

          <label >Cidade:</label>
          <input type="text"  {...register("city")} />


          <label >Gênero:</label>
          <fieldset>
            <input className="fieldset-input" type="text" list="lista-genero"  {...register("gen")}  />
          <datalist id="lista-genero">
            <option value="Homem"></option>
            <option value="Mulher"></option>
          </datalist>
          </fieldset>

          <label >Estado:</label>
          <select  defaultValue="" {...register("state")} >
            <option value="AC">AC</option>
            <option value="AP">AP</option>
            <option value="AM">AM </option>
            <option value="PA">PA </option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="TO">TO</option>
            <option value="AL">AL</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="MA">MA</option>
            <option value="PB">PB</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RN">RN</option>
            <option value="SE">SE</option>
            <option value="ES">ES</option>
            <option value="MG">MG</option>
            <option value="RJ">RJ</option>
            <option value="SP" selected>SP</option>
            <option value="PR">PR</option>
            <option value="RS">RS</option>
            <option value="SC">SC</option>
            <option value="DF">DF</option>
            <option value="GO">GO</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
             </select>
             <div className="submit-area">
             <button type="submit" disabled={isBusy}  >Salvar</button>
             </div>
             </form>
</section>
             

        
          
         
          
          
      
          </section>

      </div>
    
    </div>
  );
              }