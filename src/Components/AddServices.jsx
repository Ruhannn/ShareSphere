import { useRef } from "react";
import { useState } from "react";

const AddProduct = () => {
  const sty = `input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }`;

  const textareaRef = useRef(null);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const textarea = textareaRef.current;
    setValue(event.target.value);
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const [formData, setFormData] = useState({
    pictureUrl: "",
    serviceName: "",
    yourName: "", 
    yourEmail: "", 
    price: "",
    serviceArea: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg dark:bg-[#1a1928]">
      <h1 className="text-3xl font-bold mb-6 dark:text-[#ffffffc6]">
        Add Product
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 ">
        <div>
          <label
            className="block text-sm dark:text-[#fffffff4] font-semibold mb-2"
            htmlFor="pictureUrl">
            Picture URL of the Service
          </label>
          <input
            type="text"
            id="pictureUrl"
            name="pictureUrl"
            className="w-full p-2 border border-gray-300 rounded transition focus:outline-none bg-white dark:bg-[#181726] dark:text-white focus:ring focus:border-blue-500"
            placeholder="Enter Picture URL"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="serviceName">
            Service Name
          </label>
          <input
            type="text"
            id="serviceName"
            name="serviceName"
            className="w-full bg-white dark:bg-[#181726] dark:text-white p-2 border border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Service Name"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="yourName">
            Your Name
          </label>
          <input
            type="text"
            id="yourName"
            name="yourName"
            className="w-full bg-white dark:bg-[#181726] dark:text-white p-2 border border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Name"
            readOnly
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="yourEmail">
            Your Email
          </label>
          <input
            type="email"
            id="yourEmail"
            name="yourEmail"
            className="w-full bg-white dark:bg-[#181726] dark:text-white p-2 border border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Your Email"
            readOnly
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full bg-white dark:bg-[#181726] dark:text-white p-2 border border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Price"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="serviceArea">
            Service Area
          </label>
          <input
            type="text"
            id="serviceArea"
            name="serviceArea"
            className="w-full bg-white dark:bg-[#181726] dark:text-white p-2 border border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Service Area"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            className="dark:text-[#fffffff4] block text-sm font-semibold mb-2"
            htmlFor="description">
            Description
          </label>
          <style>{sty}</style>
          <textarea
            id="description"
            name="description"
            className=" resize-none overflow-hidden w-full p-2 border bg-white dark:bg-[#181726] dark:text-white border-gray-300 rounded transition focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter Description"
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              handleInputChange(e);
              handleChange(e);
            }}></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring focus:border-blue-700">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
