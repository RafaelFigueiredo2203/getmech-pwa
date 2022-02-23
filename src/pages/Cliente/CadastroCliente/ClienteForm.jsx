import  { useState } from 'react';

import './clienteForm.scss';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Saveimg from '../../../assets/imgs/undraw_collecting_fjjl.svg';
import MaskInput from '../../../components/MaskInput.js';
import { useForm } from "react-hook-form";
import ImageUploading from 'react-images-uploading';
import firebase from '../../../services/firebase/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Redirect } from 'react-router-dom';



const initialValues = {
  cpf:'',
  cnpj: '',
};





export function ClienteForm(){
  const auth = getAuth();
 //use para o que quiser.

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
      
     await  createUserWithEmailAndPassword(auth, data.email, data.passwordConfirmation)
      .then((userCredential) => {
        // Signed in
         
        const user = userCredential.user;

        firebase.firestore().collection('userClient')
        .doc(user.uid)
        .set({
          nome:data.nome,
          cpf:data.cpf,
          email:data.email,
          senha:data.passwordConfirmation,
          phoneNumber:data.phoneNumber,
          end:data.end,
          city:data.city,
          gen:data.gen,
          state:data.state,
          uid:user.uid
        })
       .then(() => {
        
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
       
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

   
      
     
        
    }
    
   
       
    
    

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return(
    <div className="form-client">
      <header className=" form-cliente-header">
      
        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="addFoto" >
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              className="addAPhoto"
            >
              <AddAPhotoIcon className="iconPhoto" />
            </button>
            &nbsp;
            
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img onSubmit={handleSubmit(onSubmit)} src={image['data_url']} alt="" width="100"  className="userImg"
                {...register("userImg")}
                />
                 
                <div className="image-item__btn-wrapper">
                  
                  <button className="removeImg" onClick={() => onImageRemove(index)}><DeleteForeverOutlinedIcon className="icon"/></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
        
        
      </header>

      <div>
        <section  className="form-cliente" >

          <section>
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
          <input type="password"    {...register("passwordConfirmation",{
                required: "Por Favor confirme a senha!",
                validate: {
                  matchesPreviousPassword: (value) => {
                    const { password } = getValues();
                    return password === value || "As senhas devem corresponder!";
                  }
                }
              })}
            />
            {errors.passwordConfirmation && (
              <p style={{ color: "red" }}>
                {errors.passwordConfirmation.message}
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
          <select   {...register("state")} >
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
</section>
             

            <div className="submit-area">
          <button type="submit" disabled={isBusy} >Salvar</button>
          <img src={Saveimg}  className="Saveimg" alt="saveimg" />
         
          </div>
          
      
          </section>

      </div>
    </div>
  );
              }