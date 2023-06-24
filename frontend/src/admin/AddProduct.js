import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import Base from "../core/Base.js";

const AddProduct = () => {

    const [values, setValues] = useState({
        name: "",
        description: "",
        price: "",
        stock: ""
    });

    const {
        name,
        description,
        price,
        stock
    } = values

    const test = () => {
        return(
            <div>
            <h1>hi</h1>
            </div>
        )
    }

    const onSubmit = () =>{
        
    }

    const handleChange = () => {

    }

  const createProductForm = () => {
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <label className="btn btn-block btn-success">
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </label>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control"
          placeholder="Category"
        >
          <option>Select</option>
          <option value="a">a</option>
          <option value="b">b</option>
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("quantity")}
          type="number"
          className="form-control"
          placeholder="Quantity"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success"
      >
        Create Product
      </button>
    </form>;
  };

  return (
    <Base
      title="Add product"
      description="Add your product here"
      className="container bg-info"
    >
      <h1 className="text-white">Add Product</h1>
      <NavLink 
      className="btn btn-md btn-dark mb-3 rounded" to="/admin/dashBoard">
        Admin home
      </NavLink>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
      {createProductForm()}
      {test()}
        </div>
      </div>
    </Base>
  );
};

export default AddProduct;
