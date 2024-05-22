"use client";
import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "@/utils/contact";
import { FormEvent, useRef } from "react";
import { toast } from "react-hot-toast";
export const Form = () => {
  const initialState = {
    message: {
      msg: "",
      status: 0,
    },
  };
  const [state, formaction] = useFormState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // event.preventDefault(); // Prevent default form submission as it alters the form action

    // Perform any form submission logic, such as sending the email
    const formData = new FormData(event.currentTarget);
    await formaction(formData);

    // Reset the form after submission
    if (formRef.current) {
      formRef.current.reset();
    }
  }
  function Submit() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className="dark:bg-blue-700 bg-blue-300 hover:bg-blue-400 dark:hover:bg-blue-500 disabled:bg-slate-700 disabled:text-white dark:disabled:bg-slate-700 dark:disabled:text-white disabled:cursor-not-allowed
        h-11 rounded-lg flex justify-center items-center flex-row"
        disabled={pending}
      >
        {pending ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 rotate-svg"
          >
            <path
              fillRule="evenodd"
              d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        ) : null}
        Send
      </button>
    );
  }
  return (
    <div className="shadow-2xl dark:bg-slate-800 p-3 md:w-1/2 rounded mx-auto">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action={formaction}
        className="space-y-5 flex flex-col "
      >
        <input
          title="name "
          placeholder="Full name *"
          type="text"
          name="name"
          className="dark:bg-black bg-slate-200 h-12 p-2 placeholder-gray-500"
          required
        ></input>
        <input
          title="email"
          placeholder="Email*"
          type="text"
          name="email"
          className="dark:bg-black bg-slate-200 h-12 p-2 placeholder-gray-500"
          required
        ></input>
        <input
          type="number"
          title="phonenumber"
          name="phonenumber"
          placeholder="Phone Number *"
          maxLength={10}
          className="dark:bg-black bg-slate-200 h-12 p-2 placeholder-gray-500"
          required
        ></input>
        <textarea
          title="Messages"
          placeholder="Messages*"
          name="message"
          className="dark:bg-black bg-slate-200  h-32 p-2 placeholder-gray-500 min-h-20"
          required
        ></textarea>
        {state.message.msg.length > 0
          ? state.message.status === 200
            ? toast.success(state.message.msg) && null
            : state.message.status === 400
            ? toast.error(state.message.msg) && null
            : null
          : null}
        <Submit></Submit>
      </form>
    </div>
  );
};
