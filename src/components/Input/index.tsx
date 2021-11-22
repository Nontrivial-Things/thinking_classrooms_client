import React, { FC, useState, useRef, KeyboardEvent } from "react";

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

import useRoveFocus from "../../assets/utils/onKeyPress";

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
    console.log(activeSuggestionIndex);
    if (e.key === "Enter") {
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
      setSearchTerm(filteredSuggestions[activeSuggestionIndex]);
    } else if (e.key === "ArrowUp") {
      if (activeSuggestionIndex === 0) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    }
    // User pressed the down arrow, increment the index
    else if (e.key === "ArrowDown") {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    }
  };

  return (
    <FormWrapper>
      <Form action="/" method="get">
        <Label htmlFor="header-search">
          <Input
            type="text"
            autoFocus
            placeholder="Szukaj problemów matematycznych"
            aria-label="search-input"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={onKeyDown}
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
            <Button aria-labelledby="button-label">
              <span id="button-label" hidden>
                Remove input text button
              </span>

              <RemoveIcon
                aria-hidden="true"
                focusable="false"
                onClick={() => clearInput()}
              />
            </Button>
          )}
        </Label>
      </Form>
    </FormWrapper>
  );
};

export default SearchInput;
