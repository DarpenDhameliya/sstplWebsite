import axios from '../Component/Axios';

export const Metaapicall = async () => {
  try {
    const response = await axios.get('meta/meta_list');
    const initialPortfolioList = response.data.result;

    return initialPortfolioList;
  } catch (error) {
    throw error; 
  }
};
