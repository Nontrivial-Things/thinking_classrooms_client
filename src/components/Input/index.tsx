import React, { FC, useState } from "react";

import SearchInputProps from "./interface";
import { Input, Label } from "./styledComponents";
import Wrapper from "../Wrapper/styledComponents";
import { ReactComponent as SearchIcon } from "../../assets/img/icons/search.svg";
import { ReactComponent as CloseIcon } from "../../assets/img/icons/Subtract.svg";
import { activeButton, white, lightGrey } from "../../assets/styles/colors";

const SearchInput: FC<SearchInputProps> = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([] as any);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.currentTarget.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };
  const clearInput = () => {
    setInput("");
  };

  const onClick = (e: React.FormEvent<HTMLInputElement>) => {
    setFilteredSuggestions([]);
    setInput(e.currentTarget.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul>
        {filteredSuggestions.map((suggestion: string, index: number) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li className={className} key={suggestion}>
              {suggestion}
            </li>
          );
        })}
      </ul>
    ) : (
      <div>
        <em>Ni mo</em>
      </div>
    );
  };

  return (
    <Wrapper padding="0">
      <form action="/" method="get">
        <Label htmlFor="header-search">
          <Input
            type="text"
            placeholder="Szukaj problemów matematycznych"
            value={input}
            onChange={onChange}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          />
          {showSuggestions && input && <SuggestionsListComponent />}
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
              fill: lightGrey,
              right: "0.5em",
              top: "calc(50% - 1em/2 - 0.5px)",
              bottom: "0",
              width: "1em",
              position: "absolute",
            }}
            onClick={clearInput}
          />
        </Label>
      </form>
    </Wrapper>
  );
};

export default SearchInput;
