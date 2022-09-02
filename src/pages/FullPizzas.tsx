import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FullPizzas: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<{
    name: string;
    price: number;
    imageUrl: string;
  }>();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://62d15c8ddccad0cf1765fbd3.mockapi.io/items/` + id
        );
        setData(data);
      } catch(e) {
        alert(e);
      }
    }
    fetchPizza();
  }, []);
  if (!data) {
    return <>"загрузка"</>;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        style={{ width: "100%", maxWidth: "400px" }}
        src={data.imageUrl}
        alt="пицца"
      />
      <h2>{data.name}</h2>

      <h4>{data.price} руб</h4>
    </div>
  );
};

export default FullPizzas;
