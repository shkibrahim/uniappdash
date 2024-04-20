import React from "react";
import { useState } from "react";

const Payment = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="my-10 overflow-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Method
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Enabled
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Cash</td>
            <td className="px-6 py-4 whitespace-nowrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget urna rhoncus,...
            </td>
            <td className="px-6 py-4 whitespace-nowrap">By Hand</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Bank Transfer</td>
            <td className="px-6 py-4 whitespace-nowrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget urna rhoncus,...
            </td>
            <td className="px-6 py-4 whitespace-nowrap">Online</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">PayPal</td>
            <td className="px-6 py-4 whitespace-nowrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget urna rhoncus,...
            </td>
            <td className="px-6 py-4 whitespace-nowrap">Online</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Payment;
