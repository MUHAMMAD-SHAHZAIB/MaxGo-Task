// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardView = ({ data, headers, handleSort }) => {
  return (
    <div className="">
      <div className="text-center  flex justify-end mb-5 px-4">
        <label htmlFor="view-select" className="mr-2 text-gray-600">
          Sort
        </label>
        <select
          id="view-select"
          className="border rounded-md px-3 py-1 focus:outline-none"
        >
          {headers.map(
            (header, index) =>
              index < 4 && (
                <option
                  key={index}
                  value="title"
                  onClick={() => handleSort(header.key)}
                >
                  {header.name}
                </option>
              )
          )}
        </select>
      </div>
      <div className="container mx-auto flex flex-wrap">
        {data.map((property, index) => {
          return (
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4" key={index}>
              <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div className="relative pb-48 overflow-hidden">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={property.imageUrl}
                    alt=""
                  />
                </div>
                <div className="p-4 border-b">
                  <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                    id : {property.id}
                  </span>
                  <h2 className="mt-2 mb-2  font-bold truncate">
                    Title : {property.title}
                  </h2>
                </div>
                <div className="px-4 py-2 border-b">
                  <h2 className="mt-2 mb-2  font-bold truncate">
                    Address : {property.address}
                  </h2>
                </div>
                <div className="px-4 py-2 border-b">
                  <h2 className="mt-2 mb-2  font-bold truncate">
                    Area : {property.coveredAreaSQFT}
                  </h2>
                </div>
                <div className="px-4 py-2 border-b">
                  <h2 className="mt-2 mb-2  font-bold truncate">
                    Price : {property.price}
                  </h2>
                </div>

                <div className="px-4 py-2 border-b flex justify-center">
                  <Link to={`/detail/${property.id}`}>
                    <button
                      type="button"
                      className="flex justify-center gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                    >
                      View Full Detail
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

CardView.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSort: PropTypes.func.isRequired,
};

export default CardView;
