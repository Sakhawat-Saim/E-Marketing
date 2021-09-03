// import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
const { register, handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  
  const onSubmit = (data) => {
    const imageInfo = {
        title: data.title,
        imageURL: imageUrl,
        description: data.description,
        price: data.price,
      };
    axios
      .post("https://fast-tor-66437.herokuapp.com/addService", imageInfo)
      .then(function (response) {
        alert("Service added Successfully! Please visit homepage.");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const onChangeHandle = (e) => {
    const imageData = new FormData();
    imageData.set("key", "4bc0ef2d0e2b3db4bc25cd82e27c7def");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
        alert("Data added in Database Successfully! Please submit now.");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  return (
    <div
      style={{
        margin: "4%",
        backgroundColor: "white",
        padding: "4%",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid lightgrey",
          color: "#171C2A",
          fontWeight: "500",
        }}
      >
        <h5>Add Service</h5>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            type="title"
            class="form-control"
            name="title"
            {...register('title')}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            name="description"
            {...register('description')}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPrice" class="form-label">
            Price
          </label>
          <input
            type="number"
            class="form-control"
            name="price"
            {...register('price')}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPrice" class="form-label">
            Upload photo
          </label>
          <input
            type="file"
            class="form-control"
            name="file"
            onChange={onChangeHandle}
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <div style={{border: '1px solid red', borderRadius: '10px', fontWeight:'800', color:'red', padding: '3%', margin: '2%'}}>
            Please wait a moment. Wait for coming of database addition successful message. then also wait for submission sucessfull message after clicking on submit button.
        </div>
      </form>
    </div>
  );
};

export default AddService;
