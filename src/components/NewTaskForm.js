import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")
  
  const newCategoriesArray = categories.map(category => {
    return (
      <option key={category}>
        {category}
      </option>
    )
  })
  
  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({text: text, 
      category: category})
    setText("")
    setCategory("Code")
  }

  function handleChange (event) {
    setText(event.target.value)
  }

  function handleCategoryChange(event){
    setCategory(event.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {newCategoriesArray}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
