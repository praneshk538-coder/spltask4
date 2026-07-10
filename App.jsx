import React, { useRef, useState } from "react";

const App = () => {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Watch" },
  ];

  const inputRef = useRef();

  const [filteredData, setFilteredData] = useState(products);

  const searchProduct = () => {
    const value = inputRef.current.value.toLowerCase();

    const result = products.filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    setFilteredData(result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Product Search System</h2>

      <input
        type="text"
        placeholder="Search Product"
        ref={inputRef}
      />

      <button onClick={searchProduct}>Search</button>

      <hr />

      {filteredData.length > 0 ? (
        filteredData.map((item) => (
          <h3 key={item.id}>{item.name}</h3>
        ))
      ) : (
        <h3>No Product Found</h3>
      )}
    </div>
  );
};

export default App;