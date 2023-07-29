import { api } from "../../common/Axios";

export const fetchDataFromApi = async (params) => {
  let {pagenumber, rowperpage} = params;
  try {
    const response = await api.get(`authers/career-list/${pagenumber}/${rowperpage}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    
    console.error("Error fetching data:", error.response);
    return error.response;
  }
};
