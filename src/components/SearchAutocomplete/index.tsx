import React, { FC, useState, KeyboardEvent } from "react";

import { SearchAutocompleteProps } from "./interface";

import SuggestionsListComponent from "./SuggestionsListComponent";
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
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
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
    setShowSuggestions(true);
    setShowClearButton(true);
  };

  const clearInput = () => {
    setSearchTerm("");
    setShowClearButton(false);
  };

  const chooseSuggestion = (suggestion: string) => {
    setFilteredSuggestions([]);
    setSearchTerm(suggestion);
    setActiveSuggestionIndex(-1);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (activeSuggestionIndex !== -1) {
        e.preventDefault();
        const test = filteredSuggestions[activeSuggestionIndex];
        setSearchTerm(test);
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
        // autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Label htmlFor="input-search" id="input-search-label">
          <SearchIcon />
        </Label>
        <Input
          id="input-search"
          type="text"
          autoComplete="off"
          placeholder="Szukaj problemów matematycznych"
          aria-label="Szukaj problemów"
          aria-autocomplete="list"
          aria-controls="autocomplete-options"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        />
        {showClearButton && searchTerm && (
          <Button aria-label="Remove button" onClick={() => clearInput()}>
            <span id="Remove button" hidden>
              Remove input text button
            </span>

            <RemoveIcon aria-hidden="true" />
          </Button>
        )}
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
