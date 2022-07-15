import React, { useState } from "react";

const categoriesList = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];


function Categories() {

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((cat, i) => {
          return (
            <li
              onClick={() => setActiveCategory(i)}
              key={i}
              className={activeCategory === i ? "active" : ""}
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
