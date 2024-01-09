import { useContext } from 'react';
import { PersonalDataFormContext } from '../contexts/PersonalDataFormContext';

export function usePersonalDataForm() {
  return useContext(PersonalDataFormContext);
}
