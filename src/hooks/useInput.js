//제목, 본문을 input으로 받고, 작성한 날짜 지정하기
import { useState } from 'react';

const useInput = () => {
  const [inputText, setInputText] = useState({
    title: '',
    content: '',
  });

  const onInputChange = (e) => {
    setInputText({...inputText,[e.target.name]: e.target.value });
  };

  const reset = () => {
    setInputText({title:'', content: ''});
  };

  return { inputText, onInputChange, reset };
};
export default useInput;
