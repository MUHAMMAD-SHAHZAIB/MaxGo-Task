import axios from "axios";
const BASE_URL = "http://localhost:3000";

// ------------All Table Data Fetch from Backend Server--------------------------
export const fetchDataFromJsonServer = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/listing`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // return [];
  }
};

// ------------Fetch Data By(ID) from Backend Server--------------------------
export const fetchDataById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/listing/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data by ID:", error);
    return null;
  }
};
