/* eslint-disable react/prop-types */
import { DatePicker, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const ModalContent = ({ serviceData, closeModal }) => {
  const [date, setdate] = useState();
  const { user } = useContext(AuthContext);

  const onChange = (dateString) => {
    const inputDate = new Date(dateString.$d);
    const currentDate = new Date();
    const isPast = inputDate < currentDate;
    if (isPast) {
      toast.error("The selected date is in the past.");
      return;
    } else {
      setdate(dateString.$d);
    }
  };

  const [value, setValue] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const instructions = form.instructions.value;
    const bookingData = {
      serviceName: serviceData.serviceName,
      serviceImage: serviceData.pictureUrl,
      providerEmail: serviceData.providerEmail,
      userEmail: user.email,
      area: serviceData.serviceArea,
      price: serviceData.price,
      date: date,
      instructions,
      status: "pending",
    };
    if (date && instructions) {
      axios
        .post(
          `${import.meta.env.VITE_BACK_END_API}/booking-service`,
          bookingData
        )
        .then(() => {
          toast.success("Service booked successfully");
          closeModal();
          form.reset("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Please fill all the fields");
    }
  };
  const sty = `.dark .ant-picker-input input[placeholder="Select date"]::placeholder {
    color: #f3f4f6; 
  }
  .dark .ant-picker-suffix .anticon-calendar svg {
      fill: #f3f4f6;
  }
`;
  return (
    <div className="p-6 sm:p-8 md:p-10 lg:p-12 dark:text-[#ffffffc4] xl:p-16 flex flex-col text-black justify-center">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Booking Details
      </h2>
      <form onSubmit={handleBooking}>
        <div className="mb-4">
          <p>
            <span className="font-bold">Service Name:</span> Wildlife Safari
            Expedition
          </p>
          <p>
            <span className="font-bold">Provider Email:</span>
            {serviceData.providerEmail}
          </p>
          <p>
            <span className="font-bold">Price:</span> $334
          </p>
          <p>
            <span className="font-bold">User Email:</span> kamiayaka09@gmail.com
          </p>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-bold">Select Date:</p>
          <style>{sty}</style>
          <Space direction="vertical" aria-required>
            <DatePicker className="dark:bg-[#393658]" onChange={onChange} />
          </Space>
        </div>
        <div className="mb-4">
          <p className="mb-2 font-bold">Special Instructions:</p>
          <TextArea
            value={value}
            name="instructions"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type your instructions here"
            className="overflow-hidden dark:bg-[#393658] dark:text-[#ffffffc4] dark:placeholder-gray-100"
            autoSize={{
              minRows: 3,
              maxRows: 5,
            }}
          />
        </div>
        <div className="mt-auto">
          <button
            type="submit"
            className="dark:text-[#ffffffed] btn dark:bg-[#393658]">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalContent;
