import React, { FC, useState, KeyboardEvent } from "react";

import { SearchAutocompleteProps } from "./interface";

import SuggestionsListComponent from "./suggestionsListComponent";
import {
  Form,
  Input,
  Label,
  SearchIcon,
  RemoveIcon,
  Combobox,
  Button,
} from "./styledComponents";

const SearchAutocomplete: FC<SearchAutocompleteProps> = ({ suggestions }) => {
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

  //It's working, but I would like to prevent behaviour that
  //after I hit the last suggestion the background style don't vanish

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
    <Combobox
      id="combobox"
      aria-expanded="false"
      aria-owns="autocomplete-options"
      aria-haspopup="listbox"
    >
      <Form
        action="/"
        method="get"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Label htmlFor="input-search" id="input-search-label">
          <SearchIcon />
          {showClearButton && searchTerm && (
            <Button aria-label="Remove button" onClick={() => clearInput()}>
              <span id="Remove button" hidden>
                Remove input text button
              </span>

              <RemoveIcon aria-hidden="true" />
            </Button>
          )}
        </Label>
        <Input
          id="input-search"
          type="text"
          placeholder="Szukaj problemów matematycznych"
          aria-label="Szukaj problemów"
          aria-autocomplete="list"
          aria-controls="autocomplete-options"
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
      </Form>
    </Combobox>
  );
};

export default SearchAutocomplete;
