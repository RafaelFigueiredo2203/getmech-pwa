import {useContext} from 'react';
import {DbContext} from '../components/DatabaseContext';

export function useDb(){
  const value = useContext(DbContext)

  return value;
}