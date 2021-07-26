import React from "react";

function CategoryFilter({ categories, activeCategory, onChangeActiveCategory }) {
  
  const categoryButtons = categories.map(category => {
    return (
      <button 
        key={category}
        className={ activeCategory === category ? "selected" : null} 
        onClick={() => onChangeActiveCategory(category)} 
      >
        {category}
      </button>
    )
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
