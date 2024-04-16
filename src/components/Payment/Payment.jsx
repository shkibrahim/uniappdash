import React from "react";

const Payment = () => {
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
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                Enabled
              </button>
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
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                Disabled
              </button>
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
              <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                Enabled
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Payment;
