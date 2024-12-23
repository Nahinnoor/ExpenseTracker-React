import React from "react";

export const Categories = () => {
  return (
    <div className="categories-container">
      <h2 className="categories-label">Categories:</h2>
      <div className="subcategories">
        <div className="subcategory">
          Subscriptions
          <h3 id="Sub-Balance"> 0.00 </h3>
        </div>
        <div className="subcategory">
          Food
          <h3 id="Food-Balance"> 0.00 </h3>
        </div>
        <div className="subcategory">
          Fun
          <h3 id="Fun-Balance"> 0.00 </h3>
        </div>
        <div className="subcategory">
          Miscellaneous
          <h3 id="Misc-Balance"> 0.00 </h3>
        </div>
      </div>
    </div>
  );
};
