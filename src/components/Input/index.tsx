import React, { FC, useState } from "react";

// import InputProps from "./interface";
import Input from "./styledComponents";
import Row from "../Row/styledComponents";
import SearchIcon from "../../assets/img/icons/search.svg";
import CloseIcon from "../../assets/img/icons/remove-icon.svg";

const SearchInput: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setSearchTerm(e.currentTarget.value);

  // const clearInput = () => {
  //   setSearchTerm("");
  // };

  return (
    <Row>
      {/* <form action="/" method="get"> */}
      <label htmlFor="header-search" />
      <Input
        type="text"
        placeholder="Szukaj problemów matematycznych"
        value={searchTerm}
        onChange={handleChange}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      />
      {/* <SearchIcon /> */}
      {/* </form> */}
    </Row>
  );
};

export default SearchInput;
