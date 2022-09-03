import { useSelector, useDispatch } from "react-redux";
import {
  filterCategoryIdSelector,
  setCategoryId,
} from "../features/filterSlice";

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(filterCategoryIdSelector);

  const categoriesList = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categoriesList.map((cat, i) => {
          return (
            <li
              onClick={() => dispatch(setCategoryId(i))}
              key={i}
              className={categoryId === i ? "active" : ""}
            >
              {cat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
