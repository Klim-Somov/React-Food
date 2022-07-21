import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../features/filterSlice";

function Categories({ onClickCategory }) {


  const dispatch = useDispatch();
  const categoryId = useSelector((store) => store.filter.categoryId);
 

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
              onClick={() => dispatch(setCategoryId(i)) }
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
}

export default Categories;
