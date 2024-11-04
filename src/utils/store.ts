import "../types/interfaces";
import { AddLocalStorageErrors } from "../types/interfaces";

const LocalizationService = ({ key, value }: AddLocalStorageErrors) => {
  try {
    // Retrieve existing data, defaulting to an empty array if parsing fails
    const existingDataString = localStorage.getItem(key);

    const existingData = existingDataString && JSON.parse(existingDataString);

    const updatedData = Array.isArray(existingData) ? [...existingData, ...value] : value;

    localStorage.setItem(key, JSON.stringify(updatedData));
  } catch (error) {
    console.log("Error saving to localStorage:", error);
    return { key, value, error } as AddLocalStorageErrors;
  }
};

export default LocalizationService;
