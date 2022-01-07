import React, { FC, useState, useEffect, KeyboardEvent } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { SearchAutocompleteProps, SUGGESTIONS } from "./interface";
import {
  GetSuggestionsQuery,
  Suggestion,
  SuggestionType,
} from "../../organisms/ProblemSearchSection/interface";
import SuggestionsList from "./suggestionsList";
import InputWithTags from "./inputWithTags";

import * as S from "./styles";
import { sortSuggestions } from "../../pages/ProblemsPage/utils";

const SearchAutocomplete: FC<SearchAutocompleteProps> = ({
  tag,
  setTag,
  setProblems,
  setSearchTerm,
  searchTerm,
}) => {
  const { data, loading } = useQuery<GetSuggestionsQuery>(SUGGESTIONS);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);
  const { t } = useTranslation("", { keyPrefix: "problemsPage" });

  const updateSuggestions = () => {
    if (!loading && data) {
      const { suggestions } = data;

      const sortedSuggestions = sortSuggestions(suggestions);
      setSuggestions(sortedSuggestions);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    updateSuggestions();
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
    setActiveSuggestionIndex(-1);
  };

  const chooseSuggestion = (suggestion: Suggestion) => {
    setSearchTerm(suggestion.title);

    if (suggestion.type === SuggestionType.TAG) {
      setTag(suggestion.title);
    }

    setShowSuggestions(false);
  };

  const handleKeyUp = () => {
    if (searchTerm === "") {
      clearInput();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
      setActiveSuggestionIndex(-1);
      setShowSuggestions(true);
      updateSuggestions();

      if (searchTerm == "") {
        setTag("");
      }
    }
    if (e.key === "Enter") {
      e.preventDefault();
      const activeSuggestion = suggestions[activeSuggestionIndex];

      if (!activeSuggestion) {
        setProblems([]);
      } else if (
        activeSuggestion &&
        activeSuggestion.type === SuggestionType.PROBLEM
      ) {
        setSearchTerm(activeSuggestion.title);
        navigate(`/problems/${activeSuggestion.id}`);
      } else if (
        activeSuggestion &&
        activeSuggestion.type === SuggestionType.TAG
      ) {
        setTag(activeSuggestion.title);
        setSearchTerm(activeSuggestion.title);
      }

      setShowSuggestions(false);
    } else if (e.key === "ArrowUp" && activeSuggestionIndex >= 0) {
      e.preventDefault();
      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } else if (
      e.key === "ArrowDown" &&
      activeSuggestionIndex < suggestions.length
    ) {
      e.preventDefault();
      setActiveSuggestionIndex(activeSuggestionIndex + 1);
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
        {searchTerm && !!tag ? (
          <InputWithTags
            text={searchTerm}
            onRemoveTag={clearInput}
            setTag={setTag}
          />
        ) : (
          <>
            <S.Label htmlFor="input-search" id="input-search-label">
              <S.SearchIcon />
            </S.Label>
            <S.Input
              id="input-search"
              type="text"
              autoComplete="off"
              placeholder={t("inputPlaceholder")}
              aria-label="Szukaj problemów"
              aria-autocomplete="list"
              aria-controls="autocomplete-options"
              autoFocus
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
              <>
                <S.Button
                  aria-label="Remove button"
                  onClick={() => clearInput()}
                >
                  <span id="Remove button" hidden>
                    Remove input text button
                  </span>
                  <S.RemoveIcon aria-hidden="true" />
                </S.Button>
              </>
            )}
          </>
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
