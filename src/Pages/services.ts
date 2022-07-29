import axios from "axios";
export const getData = async () => {
  const res = await axios.get(
    "https://629e68698b939d3dc2816128.mockapi.io/domains"
  );
  const data = res.data;
  return data;
};
