import React, { FC, useState, KeyboardEvent } from "react";

import { SearchAutocompleteProps } from "./interface";

import SuggestionsList from "./suggestionsList";
import * as S from "./styles";

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
    <S.Combobox
      id="combobox"
      aria-expanded="false"
      aria-owns="autocomplete-options"
      aria-haspopup="listbox"
    >
      <S.Form
        // autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <S.Label htmlFor="input-search" id="input-search-label">
          <S.SearchIcon />
        </S.Label>
        <S.Input
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
          <S.Button aria-label="Remove button" onClick={() => clearInput()}>
            <span id="Remove button" hidden>
              Remove input text button
            </span>

            <S.RemoveIcon aria-hidden="true" />
          </S.Button>
        )}
        {showSuggestions && searchTerm && (
          <SuggestionsList
            filteredSuggestions={filteredSuggestions}
            activeSuggestionIndex={activeSuggestionIndex}
            chooseSuggestion={chooseSuggestion}
          />
        )}
      </S.Form>
    </S.Combobox>
  );
};

export default SearchAutocomplete;
