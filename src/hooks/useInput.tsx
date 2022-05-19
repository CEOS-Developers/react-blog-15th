import { useCallback, useState } from 'react';

const useInput = () => {
  const [inputText, setInputText] = useState({
    title: '',
    content: '',
  });

  const onInputChange = useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  },[inputText]);

  const reset = () => {
    setInputText({ title: '', content: '' });
  };

  return { inputText, onInputChange, reset };
};
export default useInput;
