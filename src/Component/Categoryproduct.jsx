import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style/Catergory.css';

const Categoryproducts = () => {
  const { cat } = useParams();

  const dummyData = [
    { id: 1, category: 'mens', name: 'Formal Shirt', price: 1234 },
    { id: 2, category: 'womens', name: 'Blazer', price: 2234 },
    { id: 3, category: 'kids', name: 'School Uniform', price: 1274 },
    { id: 4, category: 'mens', name: 'Office Trousers', price: 9234 },
    { id: 5, category: 'womens', name: 'Pencil Skirt', price: 6234 },
    { id: 6, category: 'kids', name: 'Sports T-shirt', price: 8234 },
    {id:7,category:'mens',name:'shirt',price:7852}
  ];

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const filterData = dummyData.filter((data) => data.category === cat);
    setProductData(filterData);
  }, [cat]);

  return (
    <div className="category-container">
      <h2 className="category-title">{cat.charAt(0).toUpperCase() + cat.slice(1)} Products</h2>

      {productData.length === 0 ? (
        <p className="no-products">No products found in this category.</p>
      ) : (
        <div className="product-grid">
          {productData.map((pro) => (
            <div key={pro.id} className="product-card">
              <div className="product-img-placeholder">🧥</div>
              <h4>{pro.name}</h4>
              <p className="product-price">₹{pro.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categoryproducts;
