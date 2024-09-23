import axios from "axios";

export const fetchCountryCodes = async () => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,idd"
    );
    const codes = response.data
      .filter((country) => country.idd.root)
      .map((country) => ({
        value: `${country.idd.root}${country.idd.suffixes?.[0] || ""}`,
        label: `${country.name.common} (${country.idd.root}${
          country.idd.suffixes?.[0] || ""
        })`,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
    return codes;
  } catch (error) {
    console.error("Error fetching country codes:", error);
    throw error;
  }
};
