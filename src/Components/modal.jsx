import { useState } from "react";
import ModalContent from "./modalContent";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true">
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-7xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6 0h12v-2H6v2zM12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z"></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline">
                      Review Info Before Book
                    </h3>
                    <div className="mt-2 flex flex-col md:flex-row lg:flex-row items-center justify-center">
                      <ModalContent />
                      <div className="mt-2 flex flex-col md:flex-row lg:flex-row sm:items-center justify-center">
                        <img
                          className="max-w-[450px] w-auto rounded-lg h-[350px]  md:w-[300px] md:h-[250px] lg:w-[400px] lg:h-[300px]"
                          src="https://cdn.discordapp.com/attachments/1117395893071654962/1128374995706466335/cLBL8Eb.jpg?ex=6553ac1b&is=6541371b&hm=c6e18db9cedddbca750e584d6bbbead9b83fd2609159c3dc21d6e5ade125c83b&"
                          alt="Food Image"
                        />
                        <div className="mt-4 md:ml-4 lg:ml-4">
                          <h1 className="text-2xl font-bold">Food</h1>
                          <p className="mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Praesentium ipsum aperiam asperiores
                            repudiandae nam nulla reiciendis voluptatibus dolor
                            explicabo exercitationem.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={closeModal}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
