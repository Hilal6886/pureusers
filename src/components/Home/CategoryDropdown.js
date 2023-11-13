import React from 'react';

const CategoryDropdown = ({ categories, onCategoryClick }) => {
  return (
    <div className="search-dropdown">
      {categories.map((category) => (
        <div key={category.id} onClick={() => onCategoryClick(category.id)}>
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CategoryDropdown;
