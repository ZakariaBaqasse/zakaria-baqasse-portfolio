import { ValidationError, useForm } from "@formspree/react";
import StyledTitle from "../shared-components/styled-title";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_FORMPREE_KEY as string
  );

  useEffect(()=>{
    if(state.succeeded){
      toast("Thank you for your message! I will get back to you as soon as possible.",{
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  },[state.succeeded])

  return (
    <section id="Contact" className="min-h-screen">
      <StyledTitle word1="Contact" word2="Me" />
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-3/4 lg:w-1/2 h-full gap-4 m-auto"
      >
        <input
          className="form-input"
          type="text"
          id="full-name"
          name="full-name"
          placeholder="Full Name"
          required
        />
        <ValidationError
          field="full-name"
          prefix="Full Name"
          errors={state.errors}
        />
        <input
          className="form-input"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <ValidationError field="email" prefix="Email" errors={state.errors} />
        <input
          className="form-input"
          id="subject"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />
        <ValidationError
          field="subject"
          prefix="Subject"
          errors={state.errors}
        />
        <textarea
          className="form-area"
          id="message"
          name="message"
          placeholder="Message"
          required
        />
        <ValidationError
          field="message"
          prefix="Message"
          errors={state.errors}
        />
        <button
          className="submit-button"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Contact;
