import axios from "axios";

const instance = axios.create({
  baseURL: "https://6479a070a455e257fa63721c.mockapi.io/api/users",
});

export const getAllUsers = async ({ page, limit }) => {
  const result = await instance.get(`?page=${page}&limit=${limit}`);
  return result;
};

export const updUserFollowing = async ({ id, following, followers }) => {
  const result = await instance.put(`${id}`, { following, followers });
  return result;
};

export const getUserByCategory = async (category) => {
  const result = await instance.get(`?${category}`);
  return result;
};
