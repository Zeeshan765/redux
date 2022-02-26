import React from 'react';
import './newProduct.css';
import axios from 'axios';

const NewProduct = () => {
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState();
  const [picture, setPicture] = React.useState();
  console.log({ name, price, picture });

  const handleproduct = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('picture', picture);
    axios
      .post('http://localhost:4000/api/products', formData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <h1>Add New Product</h1>
      <div className='form-group'>
        <label htmlFor=''>Name</label>
        <input
          type='text'
          className='form-input'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor=''>Price</label>
        <input
          type='text'
          className='form-input'
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label htmlFor=''>Picture</label>
        <input
          type='file'
          className='form-input'
          onChange={(e) => {
            setPicture(e.target.files[0]);
          }}
        />
        <br />
        <button className='btn' onClick={handleproduct}>
          {' '}
          Add Product
        </button>
      </div>
    </>
  );
};

export default NewProduct;
