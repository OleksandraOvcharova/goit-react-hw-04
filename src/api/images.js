import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImagesWithFilters = async (search, page) => {
  const response = await axios.get(
    `/search/photos?query=${search}&page=${page}&per_page=12`,
    {
      headers: {
        Authorization: "Client-ID e_McKAw9UynSdA6MKajMp71Ldn2cdgCe70RGTPNYxR4",
      },
    }
  );
  return response.data;
};
