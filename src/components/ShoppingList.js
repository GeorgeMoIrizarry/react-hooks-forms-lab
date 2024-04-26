import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  
  function onSearchChange(e) {
    setSearch(e.target.value)
  
    
  }
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const searchedItems = items.filter((items) => {
    if(items.name.includes(search)) {
      return true 
    }
  })
  const itemsToDisplay = searchedItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} 
      search={search} 
      setSearch={setSearch}
      onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
