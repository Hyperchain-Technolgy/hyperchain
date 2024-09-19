import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import PropTypes from "prop-types";
import contactImage from "../assets/consult/consult.jpeg";
import SectionTitle from "./SectionHeader/SectionTitle";
import SectionParagraph from "./SectionHeader/SectionParagraph";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    skype: "",
    projectDescription: "",
  });
  const [countryCodes, setCountryCodes] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    fetchCountryCodes();
  }, []);

  const fetchCountryCodes = async () => {
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
      setCountryCodes(codes);

      const indiaCode = codes.find((code) => code.value === "+91");
      if (indiaCode) {
        setFormData((prevData) => ({
          ...prevData,
          countryCode: indiaCode.value,
        }));
      }
    } catch (error) {
      console.error("Error fetching country codes:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleCountryCodeChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      countryCode: selectedOption.value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.projectDescription.trim())
      errors.projectDescription = "Project description is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "https://script.google.com/macros/s/AKfycbza6YmnxiT0oJor5xtqR2w6F2_-mDHjZ1ehEnOs2Vu2Rk-4WGbstf1Zd-leY43GPETEsA/exec",
          formData
        );
        if (response.data.result === "success") {
          setSubmitMessage("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            countryCode: "+91",
            phone: "",
            skype: "",
            projectDescription: "",
          });
          setFormErrors({});
        } else {
          setSubmitMessage("Form submission failed. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitMessage("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300";
  const errorClasses = "text-red-500 text-sm mt-1";

  const formatOptionLabel = ({ value, label }) => (
    <div className="flex justify-between">
      <span>{value}</span>
      <span className="text-gray-400">{label.split("(")[0].trim()}</span>
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col gap-4 mb-12">
        <SectionTitle
          title="Get in Touch"
          subtitle="Contact Us"
          link="/contact"
        />
        <SectionParagraph paragraph="Ready to transform your business with blockchain? Let's connect and discuss how we can help you innovate and stay ahead of the competition." />
      </div>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <div className="relative h-[400px] overflow-hidden rounded-xl shadow-lg">
            <img
              src={contactImage}
              alt="Contact Us"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white text-center">
                Let&apos;s Connect
              </h2>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-6">
          <InputField
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            error={formErrors.name}
            inputClasses={inputClasses}
            errorClasses={errorClasses}
          />
          <InputField
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            error={formErrors.email}
            inputClasses={inputClasses}
            errorClasses={errorClasses}
          />
          <div className="flex gap-4">
            <div className="w-[90px]">
              <Select
                options={countryCodes}
                value={countryCodes.find(
                  (code) => code.value === formData.countryCode
                )}
                onChange={handleCountryCodeChange}
                placeholder="Code"
                className="react-select-container"
                classNamePrefix="react-select"
                formatOptionLabel={formatOptionLabel}
                styles={{
                  ...selectStyles,
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    color: "white",
                    minHeight: "46px",
                    height: "46px",
                    minWidth: "90px",
                    width: "90px",
                  }),
                  valueContainer: (provided) => ({
                    ...provided,
                    height: "46px",
                    padding: "0 6px",
                  }),
                  input: (provided) => ({
                    ...provided,
                    margin: "0px",
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "white",
                    "& > div": {
                      "& > span:last-child": {
                        display: "none",
                      },
                    },
                  }),
                  menu: (provided) => ({
                    ...provided,
                    width: "auto",
                    minWidth: "200px",
                  }),
                }}
              />
            </div>
            <div className="flex-1">
              <InputField
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                error={formErrors.phone}
                inputClasses={`${inputClasses} h-[46px]`}
                errorClasses={errorClasses}
              />
            </div>
          </div>
          <InputField
            type="text"
            name="skype"
            value={formData.skype}
            onChange={handleChange}
            placeholder="Your Skype (optional)"
            inputClasses={inputClasses}
          />
          <InputField
            type="textarea"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            error={formErrors.projectDescription}
            inputClasses={inputClasses}
            errorClasses={errorClasses}
          />
          <SubmitButton isSubmitting={isSubmitting} />
          {submitMessage && (
            <p
              className={
                submitMessage.includes("success")
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

const InputField = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
  inputClasses,
  errorClasses,
}) => {
  const handleInputChange = (e) => {
    if (type === "tel") {
      const numericValue = e.target.value.replace(/[^0-9]/g, "");
      onChange({ target: { name, value: numericValue } });
    } else {
      onChange(e);
    }
  };

  return (
    <div>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows="4"
          className={`${inputClasses} resize-none ${
            error ? "border-red-500" : ""
          }`}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`${inputClasses} ${error ? "border-red-500" : ""}`}
        />
      )}
      {error && <p className={errorClasses}>{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  inputClasses: PropTypes.string,
  errorClasses: PropTypes.string,
};

const SubmitButton = ({ isSubmitting }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-center group ${
      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
    {!isSubmitting && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    )}
  </button>
);

SubmitButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};

const selectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    color: "white",
    minHeight: "46px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#3b82f6" : "black",
    color: "white",
    "&:hover": {
      backgroundColor: "#1e40af",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "black",
  }),
};

export default Contact;
