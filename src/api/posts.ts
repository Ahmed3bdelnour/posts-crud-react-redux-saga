import { editPostPayload, Post, postResponse } from "../models/posts";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = (): Promise<Post[]> =>
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) =>
      data.map((item: postResponse) => ({
        key: item.id,
        title: item.title,
        description: item.body,
      }))
    );

export const fetchSinglePost = (key: number): Promise<Post> =>
  fetch(API_URL + `/${key}`)
    .then((response) => response.json())
    .then((item) => {
      if (!Object.keys(item).length)
        throw Error(`Can not find user with id ${key}`);

      return {
        key: item.id,
        title: item.title,
        description: item.body,
      };
    });

export const editPost = (key: number, data: editPostPayload): Promise<Post> =>
  fetch(API_URL + `/${key}`, {
    method: "PUT",
    body: JSON.stringify({
      id: key,
      title: data.title,
      body: data.description,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => ({
      key: data.id,
      title: data.title,
      description: data.body,
    }));

export const deletePost = (key: number): Promise<void> =>
  fetch(API_URL + `/${key}`, {
    method: "DELETE",
  }).then();
