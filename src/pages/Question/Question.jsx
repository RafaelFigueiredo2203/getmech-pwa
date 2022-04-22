import React from 'react';
import './questions.scss';
import questionImg from '../../assets/imgs/undraw_Questions_re_1fy7.svg';
import { useHistory } from 'react-router';

export default function Question(){

  const history = useHistory();

  return(
    <div className="question-body">
      <img src={questionImg} className="questionImg" alt="questionImg" />

      <h2>Você é?</h2>

      <button onClick={() => {history.push('/authpageemp')}}>Empresa</button>
      <button onClick={() => {history.push('/authpagecli')}}>Cliente</button>
    </div>
  );
}