import React from "react";
import { useForm } from "react-hook-form";

const FeedbackModal = ({ singleClass, onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.feedback);
    // Perform your logic to send feedback to the server
    // ...
    onClose(); // Close the modal after submitting the feedback
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center my-4">Send feedback</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="w-full border border-yellow-300 rounded-lg min-h-[200px]"
            placeholder="Please write the feedback"
            {...register("feedback")}
          ></textarea>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default FeedbackModal;
