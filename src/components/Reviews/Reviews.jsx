import React from "react";
import { FaStar } from "react-icons/fa6";

const Reviews = () => {
  return (
    <div className="flex gap-10 md:flex-row flex-col">
      <div className="bg-primary rounded-3xl text-white p-5 flex flex-col items-center justify-center gap-2">
        <h1 className="font-semibold">Priority</h1>
        <h1 className="text-2xl font-semibold">Normal</h1>
        <div className="flex items-center justify-between gap-2 md:flex-row flex-col">
          <span className="w-44">Friendliness: Medium</span>
          <div class="bg-gray-200 h-3 w-48 rounded-full">
            <div class="bg-green-500 h-full w-40 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 md:flex-row flex-col">
          <span className="w-44">Experience: Novice</span>
          <div class="bg-gray-200 h-3 w-48 rounded-full">
            <div class="bg-red-500 h-full w-20 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 md:flex-row flex-col">
          <span className="w-44">Reputation: Excellent</span>
          <div class="bg-gray-200 h-3 w-48 rounded-full">
            <div class="bg-green-500 h-full w-28 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 md:flex-row flex-col">
          <span className="w-44">Operation: Very High</span>
          <div class="bg-gray-200 h-3 w-48 rounded-full">
            <div class="bg-green-500 h-full w-44 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 md:flex-row flex-col">
          <span className="w-44">Ride Cancel: Rare</span>
          <div class="bg-gray-200 h-3 w-48 rounded-full">
            <div class="bg-red-500 h-full w-8 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1 bg-white p-4 rounded-md shadow-custom">
          <div className="flex gap-2 items-center">
            <span className="text-gray-400 font-semibold">Luis Jhons</span>
            <div className="flex text-primary gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            veritatis nihil nobis suscipit! Non quaerat alias consectetur illo
            obcaecati facere, temporibus id cumque molestias autem!
          </p>
        </div>
        <div className="flex flex-col gap-1 bg-white p-4 rounded-md shadow-custom">
          <div className="flex gap-2 items-center">
            <span className="text-gray-400 font-semibold">Luis Jhons</span>
            <div className="flex text-primary gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            veritatis nihil nobis suscipit! Non quaerat alias consectetur illo
            obcaecati facere, temporibus id cumque molestias autem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
