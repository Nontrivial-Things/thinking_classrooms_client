import React, { FC, useState, useEffect, KeyboardEvent } from "react";
import { useQuery } from "@apollo/client";

import { SearchAutocompleteProps, SUGGESTIONS } from "./interface";
import {
  GetSuggestionsQuery,
  Suggestion,
} from "../../organisms/ProblemSearchSection/interface";
import SuggestionsList from "./suggestionsList";

import * as S from "./styles";
import { sortSuggestions } from "../../pages/ProblemIndex/utils";

const SearchAutocomplete: FC<SearchAutocompleteProps> = ({ setTag }) => {
  const { data, loading } = useQuery<GetSuggestionsQuery>(SUGGESTIONS);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  const updateSuggestions = () => {
    if (!loading && data) {
      const { suggestions } = data;

      const sortedSuggestions = sortSuggestions(suggestions);
      setSuggestions(sortedSuggestions);
    }
  };

  useEffect(() => {
    if (!loading && data) {
      const { suggestions } = data;

      const sortedSuggestions = sortSuggestions(suggestions);
      setSuggestions(sortedSuggestions);
    }
  }, [data?.suggestions.length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    const filteredList = suggestions.filter(
      (suggestion) =>
        suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setSearchTerm(e.currentTarget.value);
    setSuggestions(filteredList);
    setShowSuggestions(true);
    setShowClearButton(true);
  };

  const clearInput = () => {
    setSearchTerm("");
    setShowClearButton(false);
    setShowSuggestions(false);
    updateSuggestions();
    setTag("");
  };

  const chooseSuggestion = (suggestion: Suggestion) => {
    updateSuggestions();
    setSearchTerm(suggestion.title);
    setTag(suggestion.title);
    setActiveSuggestionIndex(-1);
    setShowSuggestions(false);
  };

  const handleKeyUp = () => {
    if (searchTerm === "") {
      clearInput();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
      updateSuggestions();
    }
    if (e.key === "Enter") {
      if (activeSuggestionIndex !== -1) {
        e.preventDefault();
        const activeSuggestion = suggestions[activeSuggestionIndex];
        setSearchTerm(activeSuggestion.title);
        setTag(activeSuggestion.title);
        updateSuggestions();
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
      }
    } else if (e.key === "ArrowUp") {
      if (activeSuggestionIndex >= 0) {
        e.preventDefault();
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    } else if (e.key === "ArrowDown") {
      if (activeSuggestionIndex < suggestions.length) {
        e.preventDefault();
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    }
  };

  return loading ? null : (
    <S.Combobox
      id="combobox"
      aria-expanded="false"
      aria-owns="autocomplete-options"
      aria-haspopup="listbox"
    >
      <S.Form
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
          onKeyUp={handleKeyUp}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          showSuggestions={showSuggestions}
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
            filteredSuggestions={suggestions}
            activeSuggestionIndex={activeSuggestionIndex}
            chooseSuggestion={chooseSuggestion}
          />
        )}
      </S.Form>
    </S.Combobox>
  );
};

export default SearchAutocomplete;
