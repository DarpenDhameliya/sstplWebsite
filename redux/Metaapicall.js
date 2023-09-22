import axios from '../Component/Axios';

export const Metaapicall = async () => {
  try {
    const response = await axios.get('meta/meta_list');
    const initialPortfolioList = response.data.result;
    return initialPortfolioList;
  } catch (error) {
    return error.response;
  }
};

export const PortfolioListApiCall = async () => {
  try {
    const response = await axios.post('portfolio/portfolio_list');
    const initialPortfolioListdata = response.data.result;
    return initialPortfolioListdata;
  } catch (error) {
    throw error;
  }
}


export const AboutapiCall = async () => {
  try {
    const response = await axios.get('about/about_list');
    const initialAboutapiCall = response.data.result;
    return initialAboutapiCall;
  } catch (error) {
    return error.response.data;
  }
}

export const TestimonialapiCall = async () => {
  try {
    const response = await axios.post('testimonial/testimonial_list');
    const initialtestimonialapiCall = response.data.result;
    return initialtestimonialapiCall;
  } catch (error) {
    return error.response.data;
  }
}

export const CareerapiCall = async () => {
  try {
    const response = await axios.get('career/careerdetails_list');
    const initialcareerapiCall = response.data.result;
    return initialcareerapiCall;
  } catch (error) {
    return error.response.data;
  }
}
