import React from "react";
// pass another call back function in filter for search
function Filter({ onCategoryChange, search, setSearch, onSearchChange }) {
  return (
    <div className="Filter">
      <input type="text" 
      name="search" 
      placeholder="Search..." 
      onChange={onSearchChange}
      value={search}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
