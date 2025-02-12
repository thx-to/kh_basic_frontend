import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000";

const AxiosApi = {
  genderChart: async (region) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/gender/${region}`, {
        params: { region },
      });
      return response;
    } catch (error) {
      console.error("API 요청 오류: ", error);
      return error.response;
    }
  },
};

export default AxiosApi;
