import React, { FC, useState, useEffect, KeyboardEvent } from "react";
import { gql, useQuery } from "@apollo/client";

import { SearchAutocompleteProps } from "./interface";
import {
  GetSuggestionsQuery,
  Suggestion,
} from "../../organisms/ProblemSearchSection/interface";
import SuggestionsList from "./suggestionsList";
import * as S from "./styles";

export const SUGGESTIONS = gql`
  query GetSuggestions {
    suggestions {
      type
      title
      id
    }
  }
`;
const SearchAutocomplete: FC<SearchAutocompleteProps> = ({ setTag }) => {
  const { data, loading } = useQuery<GetSuggestionsQuery>(SUGGESTIONS);

  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>(
    []
  );

  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  useEffect(() => {
    if (!loading && data) {
      setFilteredSuggestions(data.suggestions);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    const filteredList = filteredSuggestions.filter(
      (suggestion) =>
        suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setSearchTerm(e.currentTarget.value);
    setFilteredSuggestions(filteredList);
    setShowSuggestions(true);
    setShowClearButton(true);
  };

  const clearInput = () => {
    setSearchTerm("");
    setShowClearButton(false);
    setShowSuggestions(false);
    if (!loading && data) {
      setFilteredSuggestions(data.suggestions);
    }
  };

  const chooseSuggestion = (suggestion: Suggestion) => {
    if (!loading && data) {
      setFilteredSuggestions(data.suggestions);
    }
    setSearchTerm(suggestion.title);
    setTag(suggestion.title);
    setActiveSuggestionIndex(-1);
    setShowSuggestions(false);
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (searchTerm === "") {
      clearInput();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
      if (!loading && data) {
        setFilteredSuggestions(data.suggestions);
      }
    }
    if (e.key === "Enter") {
      if (activeSuggestionIndex !== -1) {
        e.preventDefault();
        const activeSuggestion = filteredSuggestions[activeSuggestionIndex];
        setSearchTerm(activeSuggestion.title);
        setTag(activeSuggestion.title);
        if (!loading && data) {
          setFilteredSuggestions(data.suggestions);
        }
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
