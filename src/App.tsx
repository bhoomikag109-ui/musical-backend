import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://musical-backend-e7vf.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Musical Instruments</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;