import React, { FC, useState } from "react";

import { SearchInputProps } from "./interface";

import SuggestionsListComponent from "./suggestionsListComponent";
import { Form, Input, Label, SearchIcon, ClearIcon } from "./styledComponents";

const SearchInput: FC<SearchInputProps> = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([] as any);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handelChange = (e: React.FormEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    const filteredList = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setSearchTerm(e.currentTarget.value);
    setFilteredSuggestions(filteredList);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const clearInput = () => {
    setSearchTerm("");
  };

  const onClick = (e: React.FormEvent<HTMLInputElement>) => {
    setFilteredSuggestions([]);
    setSearchTerm(e.currentTarget.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  return (
    <Form action="/" method="get">
      <Label htmlFor="header-search">
        <Input
          type="text"
          placeholder="Szukaj problemów matematycznych"
          value={searchTerm}
          onChange={handelChange}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        />
        {showSuggestions && searchTerm && (
          <SuggestionsListComponent
            filteredSuggestions={filteredSuggestions}
            activeSuggestionIndex={activeSuggestionIndex}
          />
        )}
        <SearchIcon />
        <ClearIcon />
      </Label>
    </Form>
  );
};

export default SearchInput;
