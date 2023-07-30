// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TableData({ data, headers, handleSort }) {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col" className="px-4 py-3">
                  <div className="flex items-center">
                    {header.name}

                    {index < 4 && (
                      <svg
                        className="w-3 h-3 ml-1.5 cursor-pointer"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        onClick={() => handleSort(header.key)}
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          {/* ----------------------table-body--------------------- */}
          <tbody>
            {data.map((product, index) => {
              return (
                <tr key={index} className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-4 py-3 truncate font-medium text-gray-900 whitespace-nowrap dark:text-white  "
                  >
                    {product.title}
                  </th>
                  <td className="px-4 py-3">{product.address}</td>
                  <td className="px-4 py-3">{product.coveredAreaSQFT}</td>
                  <td className="px-4 py-3">{product.price}</td>
                  <td className="px-5 py-4 flex items-center justify-start">
                    <Link to={`/detail/${product.id}`}>
                      <button
                        className="inline-flex p-1 items-center text-sm font-medium text-center hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100 bg-blue-500 px-2 text-blue-50"
                        type="button"
                      >
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

TableData.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSort: PropTypes.func.isRequired,
};

export default TableData;
