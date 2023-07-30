// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  currentItemCount,
  indexOfFirstItem,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to handle the page change when a pagination button is clicked.
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };
  return (
    <>
      <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4">
        <p className="text-gray-600 dark:text-gray-400">
          Showing{"  "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {indexOfFirstItem + 1} - {indexOfFirstItem + currentItemCount}
          </span>{" "}
          {"  "}
          of{"  "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalItems}
            {"  "}
          </span>
          items
        </p>
        <ul className="inline-flex items-stretch -space-x-px">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center h-full py-1.5 px-3 ml-0  rounded-l-lg border border-gray-300 bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                className={`py-[4px] px-3  border border-gray-300 ${
                  currentPage === pageNumber
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 hover:bg-blue-200"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center h-full py-1.5 px-3 leading-tight rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-blue-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </ul>
      </nav>
    </>
  );
}

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentItemCount: PropTypes.number.isRequired,
  indexOfFirstItem: PropTypes.number.isRequired,
};
