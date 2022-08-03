import { ChangeEvent, useState } from "react";

function useSearcher() {
  const [Text, setText] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return {
    Text,
    handleChange,
  }
}

export default useSearcher;
