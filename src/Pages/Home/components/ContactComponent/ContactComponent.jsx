// import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
// import { toast } from "react-hot-toast";

import {
  CONTACT_ABOVE_TEXT,
  CONTACT_BELOW_TEXT,
  CONTACT_BUTTON,
  CONTACT_FORM,
  CONTACT_INFO,
  CONTACT_TITLE,
} from "./ContactComponent.config";

const ContactComponent = () => {
  const form = useRef();
  const [formState, setFormState] = React.useState({});

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    console.log(formState);

    // const toastId = toast.loading("Sending email...");

    // emailjs
    //   .sendForm(
    //     "service_aflqday",
    //     "template_yjeqp4f",
    //     form.current,
    //     "nMSFTOY6M2qrtd4un"
    //   )
    //   .then(
    //     (result) => {
    //       // console.log(result);
    //       toast.success("Your message has been sent successfully", {
    //         id: toastId,
    //       });
    //       e.target.reset();
    //     },
    //     (error) => {
    //       // console.log(error);
    //       toast.error("Failed to send your message.", {
    //         id: toastId,
    //       });
    //     }
    //   );
  };

  const classes = {
    contactItem:
      "bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-10 sm:h-[70px] sm:max-w-[70px]",

    inputField:
      "border-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:border-primary dark:focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none mb-4 sm:mb-6",
  };

  return (
    <>
      <div
        id="contact"
        className="px-5 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800"
      >
        <section className="relative z-10 overflow-hidden py-20 lg:py-[120px]">
          <div className="max-w-7xl mx-auto">
            <div className="-mx-4 flex flex-wrap lg:justify-between items-center">
              <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                <div className="mb-12 mr-5 lg:mb-0">
                  <span className="text-primary mb-1 block text-base font-semibold">
                    {CONTACT_ABOVE_TEXT}
                  </span>
                  <h2 className="text-dark dark:text-gray-200 mb-2 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                    {CONTACT_TITLE}
                  </h2>
                  <p className="text-body-color mb-9 text-base leading-relaxed dark:text-gray-300">
                    {CONTACT_BELOW_TEXT}
                  </p>

                  {CONTACT_INFO.map((item) => (
                    <div
                      className="mb-8 flex w-full max-w-[370px]"
                      key={item._id}
                    >
                      <div className={classes.contactItem}>{item.icon}</div>
                      <div className="w-full">
                        <h4 className="text-dark dark:text-gray-200 mb-1 text-xl font-bold">
                          {item.title}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-base">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700 border border-gray-100 p-8 shadow-lg sm:p-12">
                  <form ref={form} onSubmit={handleContactFormSubmit}>
                    {CONTACT_FORM.map((item) => (
                      <item.input
                        key={item._id}
                        type={item.type}
                        placeholder={item.placeholder}
                        name={item.name}
                        id={item.id}
                        className={classes.inputField}
                        rows={item.rows ? item.rows : null}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                    ))}
                    <button
                      type={CONTACT_BUTTON.type}
                      className="bg-primary border-primary w-full rounded p-3 text-white duration-300 hover:bg-secondary hover:shadow-md font-medium"
                    >
                      {CONTACT_BUTTON.text}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactComponent;
