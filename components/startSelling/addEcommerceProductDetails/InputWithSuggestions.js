import React, { useState } from "react";

function InputWithSuggestionsAndTags() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tags, setTags] = useState(["Clothing"]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    // Here you would fetch suggestions based on the input value
    // and set them with setSuggestions(suggestions)
    // For simplicity, we'll just hardcode some suggestions
    setSuggestions(["Shoes", "Coats", "Jewellery",].filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    ));
  };

  const handleSelectSuggestion = (suggestion) => {
    setTags([...tags, suggestion]);
    setInputValue("");
    setSuggestions([]);
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && inputValue) {
      const newTags = inputValue.split(",");
      setTags([...tags, ...newTags]);
      setInputValue("");
    }
  };
  return (
    <div className="tags-input-container border px-20 py-20">
      <div className="tags-container">
        {tags.map((tag) => (
          <div key={tag} className="tag ">
            {tag}{" "}
            <span onClick={() => handleRemoveTag(tag)}>&times;</span>
          </div>
        ))}
      </div>
      <div className="form-input tag-input">
        <input type="text" value={inputValue} onChange={handleInputChange}  onKeyDown={handleInputKeyDown} />
      </div>
      <ul className="suggestion-list">
        {suggestions.map((suggestion) => (
          <li
            className="border"
            key={suggestion}
            onClick={() => handleSelectSuggestion(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InputWithSuggestionsAndTags;