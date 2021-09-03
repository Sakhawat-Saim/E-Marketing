// import { faRegistered } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const onSubmit = (data) => {
    const imageInfo = {
      email: data.email,
      name: data.name,
      imageURL: imageUrl,
      reviewText: data.reviewText,
      rating: data.rating,
    };
    axios
      .post("https://fast-tor-66437.herokuapp.com/addReview", imageInfo)
      .then(function (response) {
        alert("Database Updated Successfully! Please Submit Now");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onChangeHandle = (e) => {
    const imageData = new FormData();
    imageData.set("key", "4bc0ef2d0e2b3db4bc25cd82e27c7def");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
        alert("Review added Successfully! Please visit homepage");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div style={{ padding: "5%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              {...register("email")}
            ></input>
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              name="name"
              {...register("name")}
            ></input>
          </div>
          <div class="mb-3">
            <label class="form-check-label" for="exampleCheck1">
              Review Text
            </label>
            <input
              type="text"
              class="form-control"
              name="reviewText"
              {...register("reviewText")}
            ></input>
          </div>
          <div class="mb-3">
            <label class="form-check-label" for="exampleCheck1">
              Rate out of 5 Star
            </label>
            <input
              type="number"
              class="form-control"
              name="rating"
              {...register("rating")}
            ></input>
          </div>
          <div class="mb-3">
            <label class="form-check-label" for="exampleCheck1">
              Upload your photo
            </label>
            <input
              type="file"
              class="form-control"
              name="imageUrl"
              onChange={onChangeHandle}
            ></input>
          </div>
          
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
          <div
            style={{
              border: "1px solid red",
              borderRadius: "10px",
              fontWeight: "800",
              color: "red",
              padding: "3%",
              margin: "2%",
            }}
          >
            Please wait a moment. Wait for coming of database addition
            successful message. then also wait for submission sucessfull message
            after clicking on submit button.
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
