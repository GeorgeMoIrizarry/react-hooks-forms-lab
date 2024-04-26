import React, {useState} from "react";
import { v4 as uuid } from "uuid";
function ItemForm({ onItemFormSubmit}) {
  const [itemCategory, setItemCategory] = useState("Produce")
  const [itemName, setItemName] = useState("")
  function onItemNameChange(e) {
    setItemName(e.target.value)
    
    
  }
  function onItemCategoryChange(e) {
    setItemCategory(e.target.value)
    
  }
  const newItem = {
    id : uuid(),
    name : itemName, 
    category : itemCategory
  }
  function handleSubmit(e) {
    e.preventDefault()
    onItemFormSubmit(newItem)
  }
  
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label onChange={onItemNameChange}>
        Name:
        <input type="text" name="name" value={itemName} onChange={onItemNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
