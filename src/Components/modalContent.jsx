
import { DatePicker, Space, Button } from "antd";

const ModalContent = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="p-6 sm:p-8 md:p-10 lg:p-12 dark:text-[#ffffffc4] xl:p-16 flex flex-col text-black  justify-center">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Booking Details
      </h2>
      <div className="mb-4">
        <p>
          <span className="font-bold">Service Name:</span> Wildlife Safari
          Expedition
        </p>
        <p>
          <span className="font-bold">Provider Email:</span>{" "}
          rakibhasan96000@gmail.com
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
        <Space direction="vertical">
          <DatePicker className=" dark:bg-[#393658]" onChange={onChange} />
        </Space>
      </div>
      <div className="mt-auto">
        <Button type="default" className="dark:text-[#ffffffed]" size="large" block>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ModalContent;
