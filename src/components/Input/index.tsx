import React, { FC, useState, useEffect } from "react";

import { SearchInputProps } from "./interface";

import SuggestionsListComponent from "./suggestionsListComponent";
import onKeyPress from "../../assets/utils/onKeyPress";
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
  const onKeyPress = (key: any) => {
    console.log(key);
    // Keep track of key state
    const [pressed, setPressed] = useState(false);

    // Does an event match the key we're watching?
    const match = (event: KeyboardEvent) =>
      key.toLowerCase() == event.key.toLowerCase();

    // Event handlers
    const onDown = (event: KeyboardEvent) => {
      if (match(event)) setPressed(true);
    };

    const onUp = (event: KeyboardEvent) => {
      if (match(event)) setPressed(false);
    };

    // Bind and unbind events
    useEffect(() => {
      window.addEventListener("keydown", onDown);
      window.addEventListener("keyup", onUp);
      return () => {
        window.removeEventListener("keydown", onDown);
        window.removeEventListener("keyup", onUp);
      };
    }, [key]);

    return pressed;
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
            onKeyPress={onKeyPress}
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
