import React, { FC, useState } from "react";

import { SearchInputProps } from "./interface";

import SuggestionsListComponent from "./suggestionsListComponent";
import onKeyPress from "../../assets/utils/onKeyPress";
import {
  Form,
  Input,
  Label,
  SearchIcon,
  ClearIcon,
  FormWrapper,
  Button,
} from "./styledComponents";

const SearchInput: FC<SearchInputProps> = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <FormWrapper>
      <Form action="/" method="get">
        <Label htmlFor="header-search">
          <Input
            type="text"
            placeholder="Szukaj problemów matematycznych"
            value={searchTerm}
            onChange={handelChange}
            // onKeyPress={onKeyPress}
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
                Clear input button
              </span>

              <ClearIcon
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
