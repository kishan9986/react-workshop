import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiService } from "../services/postService";

export default function PostForm({ posts, setPosts, editPost, setEditPost }) {
  const axiosInstance = new apiService();
  const defaultFormValue = {
    title: "",
    body: "",
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: editPost ? editPost : defaultFormValue,
  });

  useEffect(() => {
    if (editPost) {
      setValue("title", editPost.title);
      setValue("body", editPost.body);
    } else {
      reset();
    }
  }, [editPost]);

  const onSubmit = (data) => {
    console.log("Form submitted", data);
    if (editPost) {
      editPostData(data);
    } else addPost(data);
  };

  const addPost = async (data) => {
    try {
      const addResponse = await axiosInstance.createPost(data);
      console.log(addResponse);
      setPosts([addResponse.data, ...posts]);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const editPostData = async (data) => {
    try {
      const updateResponse = await axiosInstance.updatePost(editPost.id, data);
      setPosts(
        posts.map((post) =>
          post.id === editPost.id ? updateResponse.data : post
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  //   console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>Title</div>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Title" {...register("title", { required: true })} />
      {errors.title && <div>This field is required</div>}
      <div>Body</div>
      {/* include validation with required or other standard HTML validation rules */}
      <textarea
        placeholder="Message"
        {...register("body", { required: true })}
      ></textarea>
      {/* errors will return when field validation fails  */}
      {errors.body && <div>This field is required</div>}
      <div>
        <button type="submit">{editPost ? "Edit Post" : "Add post"}</button>
        {editPost && <button type="button">Cancel edit</button>}
      </div>
    </form>
  );
}
