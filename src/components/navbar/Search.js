import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { searchAction } from "../../redux/features/filter/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  // if user is not in home page

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(searchAction(input));
    if (!match) {
      navigate("/");
    }

    setInput("");
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
