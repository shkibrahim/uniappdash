import React from "react";
import profile from "../../assets/img/profile.jpeg";
const SupportQuery = ({ setTrigger }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-4 rounded-lg relative flex flex-col gap-3 w-[350px] md:max-w-[400px]">
        <button
          className="absolute top-4 right-4 text-black"
          onClick={() => setTrigger(false)}
        >
          &#10006;
        </button>
        <h1 className="text-2xl font-semibold text-center">Support</h1>
        <h1 className="text-primary font-semibold">Replying to Query by:</h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={profile}
                alt=""
                className="w-10 h-10 rounded-full object-cover bg-center"
              />
              <div className="flex flex-col">
                <h2>Ablert Filma</h2>
                <h2>September 9, 2023</h2>
              </div>
            </div>
            <div>Query No. 121</div>
          </div>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            facilis esse adipisci? Qui explicabo repudiandae libero expedita
            dignissimos? Itaque accusamus quis perspiciatis inventore aut
            veritatis esse optio error distinctio tempore.
          </p>
        </div>
        <form action="" className="flex flex-col gap-3">
          <label className="text-primary font-semibold">
            Address the Query
          </label>
          <textarea
            name="rejection"
            id=""
            cols="40"
            rows="8"
            className="border border-1 border-primary rounded-md outline-primary"
          ></textarea>
          <button className="px-3 py-2 bg-primary text-white rounded-md">
            Reply
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportQuery;
