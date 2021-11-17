import React, { FC, useState } from "react";

// import InputProps from "./interface";
import { Input, Label } from "./styledComponents";
import Wrapper from "../Wrapper/styledComponents";
import { ReactComponent as SearchIcon } from "../../assets/img/icons/search.svg";
import { ReactComponent as CloseIcon } from "../../assets/img/icons/Subtract.svg";
import { activeButton, white, lightGrey } from "../../assets/styles/colors";

const SearchInput: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
    setSearchTerm(e.currentTarget.value);

  // const clearInput = () => {
  //   setSearchTerm("");
  // };

  return (
    <Wrapper padding="0">
      <form action="/" method="get">
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
          <SearchIcon
            style={{
              stroke: activeButton,
              left: "0.5em",
              top: "calc(50% - 1.5/2 - 0.5px)",
              bottom: "0",
              position: "absolute",
            }}
          />
          <CloseIcon
            style={{
              fill: "#C4C4C4",
              right: "0.5em",
              top: "calc(50% - 1em/2 - 0.5px)",
              bottom: "0",
              width: "1em",
              position: "absolute",
            }}
          />
        </Label>
      </form>
    </Wrapper>
  );
};

export default SearchInput;
