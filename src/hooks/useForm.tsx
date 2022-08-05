import { ChangeEvent, useState } from "react";

function useForm<T>(value: T) {
  const [Text, setText] = useState<T>(value);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setText({ ...Text, [name]: value });
  };
  return {
    Text,
    setText,
    handleChange,
  };
}

export default useForm;
