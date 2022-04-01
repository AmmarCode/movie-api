import React from "react";

const SearchBox = ({ setSearchQuery }) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        placeholder="Type to search movies directory..."
				onChange={(e)=> setSearchQuery(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
