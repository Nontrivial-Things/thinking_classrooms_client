import React, { FC, useState } from "react";

// import InputProps from "./interface";
import { Input, Label } from "./styledComponents";
import Wrapper from "../Wrapper/styledComponents";
// import SearchIcon from "../../assets/img/icons/search.svg";
// import CloseIcon from "../../assets/img/icons/Subtract.svg";

const SearchInput: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setSearchTerm(e.currentTarget.value);

  // const clearInput = () => {
  //   setSearchTerm("");
  // };

  return (
    <Wrapper>
      {/* <form action="/" method="get"> */}
      <Label htmlFor="header-search">
        <Input
          type="text"
          placeholder="Szukaj problemów matematycznych"
          value={searchTerm}
          onChange={handleChange}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        />
      </Label>
      {/* <SearchIcon /> */}
      {/* </form> */}
    </Wrapper>
  );
};

export default SearchInput;
