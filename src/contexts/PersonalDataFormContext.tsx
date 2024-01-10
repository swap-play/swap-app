import { zodResolver } from '@hookform/resolvers/zod';
import { createContext, useState } from 'react';
import {
  Control,
  useForm,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormGetValues,
  UseFormSetValue,
  UseFormClearErrors,
  UseFormTrigger,
} from 'react-hook-form';
import { z } from 'zod';
import { api } from '../services/api';

const schema = z.object({
  name: z
    .string({ required_error: 'Nome é obrigatório' })
    .min(1, 'Nome é obrigatório'),
  gender: z.object(
    {
      _index: z.number(),
      label: z.string(),
      value: z.number(),
    },
    { required_error: 'Genêro é obrigatório' },
  ),
  birthday: z.date({ required_error: 'Data de nascimento obrigatória' }),
  cep: z
    .string({ required_error: 'CEP é obrigatório' })
    .min(1, 'CEP é obrigatório'),
  state: z
    .string({ required_error: 'Estado é obrigatório' })
    .min(1, 'Estado é obrigatório'),
  city: z
    .string({ required_error: 'Cidade é obrigatória' })
    .min(1, 'Cidade é obrigatória'),
  neighbourhood: z
    .string({ required_error: 'Bairro é obrigatório' })
    .min(1, 'Bairro é obrigatório'),
  street: z
    .string({ required_error: 'Rua é obrigatória' })
    .min(1, 'Rua é obrigatória'),
  number: z
    .string({ required_error: 'Número é obrigatório' })
    .min(1, 'Número é obrigatório'),
  complement: z.string().optional(),
  avatar: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface PersonalDataFormContextValue {
  handleSubmit(data: FormData): void;
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  hookFormHandleSubmit: any;
  getValues: UseFormGetValues<FormData>;
  setValue: UseFormSetValue<FormData>;
  clearErrors: UseFormClearErrors<FormData>;
  trigger: UseFormTrigger<FormData>;
  isSubmitSuccessed: boolean;
}

export const PersonalDataFormContext = createContext(
  {} as PersonalDataFormContextValue,
);

export function PersonalDataFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    handleSubmit: hookFormHandleSubmit,
    control,
    formState: { errors },
    getValues,
    setValue,
    clearErrors,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    reValidateMode: 'onSubmit',
  });

  const [isSubmitSuccessed, setIsSubmitSuccessed] = useState(false);

  const handleSubmit = async (data: FormData) => {
    const { name, gender, birthday } = data;

    const userData = { name, gender, birthday };

    try {
      await api.put(`/users`, {
        name,
        gender: userData.gender.label,
        birthday,
      });

      handleSubmitAvatar(data);
      handleSubmitAddress(data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  async function handleSubmitAvatar({ avatar }: FormData) {
    try {
      const formData = new FormData();

      formData.append('avatar', {
        type: 'image/png',
        name: 'avatarImage.png',
        uri: avatar,
      });

      await api.patchForm('/users/avatar', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmitAddress(addressData: FormData) {
    const { cep, city, neighbourhood, number, state, street, complement } =
      addressData;

    try {
      await api.post(`/address`, {
        cep,
        city,
        neighbourhood,
        number: Number(number),
        state,
        street,
        complement,
      });
      setIsSubmitSuccessed(true);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <PersonalDataFormContext.Provider
      value={{
        handleSubmit,
        control,
        errors,
        hookFormHandleSubmit,
        getValues,
        setValue,
        clearErrors,
        trigger,
        isSubmitSuccessed,
      }}
    >
      {children}
    </PersonalDataFormContext.Provider>
  );
}
