import { useState } from 'react';

const useInput = () => {
  const [inputText, setInputText] = useState({
    title: '',
    content: '',
  });

  const onInputChange = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setInputText({ title: '', content: '' });
  };

  return { inputText, onInputChange, reset };
};
export default useInput;
