import React, { FC, useState, KeyboardEvent } from "react";

import { SearchInputProps } from "./interface";

import SuggestionsListComponent from "./suggestionsListComponent";
import {
  Form,
  Input,
  Label,
  SearchIcon,
  RemoveIcon,
  FormWrapper,
  Button,
} from "./styledComponents";

const SearchInput: FC<SearchInputProps> = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    const filteredList = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setSearchTerm(e.currentTarget.value);
    setFilteredSuggestions(filteredList);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
    setShowClearButton(true);
  };

  const clearInput = () => {
    setSearchTerm("");
    setShowClearButton(false);
  };

  const chooseSuggestion = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    setFilteredSuggestions([]);
    setSearchTerm(e.currentTarget.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (activeSuggestionIndex !== -1) {
        e.preventDefault();
        setSearchTerm(filteredSuggestions[activeSuggestionIndex]);
        setFilteredSuggestions([]);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
      }
    } else if (e.key === "ArrowUp") {
      if (activeSuggestionIndex >= 0) {
        e.preventDefault();
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    } else if (e.key === "ArrowDown") {
      if (activeSuggestionIndex < filteredSuggestions.length) {
        e.preventDefault();
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    }
  };

  return (
    <FormWrapper>
      <Form
        action="/"
        method="get"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Label htmlFor="header-search">
          <Input
            type="text"
            placeholder="Szukaj problemów matematycznych"
            aria-label="search-input"
            aria-owns="autocomplete-options"
            aria-autocomplete="list"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={(e) => onKeyDown(e)}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          />
          {showSuggestions && searchTerm && (
            <SuggestionsListComponent
              filteredSuggestions={filteredSuggestions}
              activeSuggestionIndex={activeSuggestionIndex}
              chooseSuggestion={chooseSuggestion}
            />
          )}
          <SearchIcon />
          {showClearButton && searchTerm && (
            <Button aria-label="Remove button" onClick={() => clearInput()}>
              <span id="Remove button" hidden>
                Remove input text button
              </span>

              <RemoveIcon aria-hidden="true" focusable="false" />
            </Button>
          )}
        </Label>
      </Form>
    </FormWrapper>
  );
};

export default SearchInput;
