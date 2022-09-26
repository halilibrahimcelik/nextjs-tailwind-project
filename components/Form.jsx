import React from "react";

const Form = () => {
  return (
    <main className="p-3 max-w-[1240px] m-auto">
      <h1 className="text-2xl  ml-0  md:ml-10 font-bold text-center md:text-left my-2">
        Let's work Together
      </h1>
      <form className="flex flex-col rounded-lg shadow-customShadow bg-gradient-to-r   from-rose-200  via-indigo-200 to-stone-100   p-4 max-w-2xl mx-auto">
        <div className="flex justify-center gap-4 p-3">
          <input
            className="outline-none w-full"
            type="text"
            placeholder="Name.."
          />
          <input
            className="outline-none w-full"
            type="email"
            placeholder="Email.."
          />
        </div>
        <div className="flex  flex-col gap-4 p-3">
          <input
            className="outline-none w-full"
            type="text"
            placeholder="Subject.."
          />
          <textarea
            className="outline-none w-full"
            cols="30"
            rows="5"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="py-3 px-6 bg-red-400 w-fit self-center rounded-lg outline-none text-white ">
          Submit
        </button>
      </form>
    </main>
  );
};

export default Form;
