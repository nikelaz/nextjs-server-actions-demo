'use client';

import { create } from './actions';
import { useFormState } from 'react-dom';

const initialState = {
  message: null
};

const CreateForm = () => {
  const [state, formAction] = useFormState(create, initialState);

  return (
    <form action={formAction}>
      <input type="text" name="title" required placeholder="Title" />
      <button type="submit">Submit</button>
      <div>{state?.message}</div>
    </form>
  );
};

export default CreateForm;
