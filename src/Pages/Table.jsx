// // eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import TableData from "../components/TableData";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import { fetchDataFromJsonServer } from "../Api/Utils";

const headers = [
  { name: "Title", key: "title" },
  { name: "Address", key: "address" },
  { name: "Covered Area", key: "coveredAreaSQFT" },
  { name: "Price", key: "price" },
  { name: "Action", key: "action" },
];

export default function Table() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentData, setCurrentData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const itemsPerPage = 5;

  //Fetch api data
  useEffect(() => {
    fetchDataFromJsonServer().then((fetchedData) => {
      setData(fetchedData);
      setCurrentData(fetchedData); // Initialize currentData with fetched data
    });
  }, []);

  //****************** Function to handle search query change (Start)******************
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    setCurrentPage(1); // Reset the current page when search query changes

    // Filter data based on search query
    const filteredData = data.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.address.toLowerCase().includes(value.toLowerCase())
      // You can include additional fields for filtering as needed.
    );

    // Update the currentData state with the filtered data
    setCurrentData(filteredData);
  };
  //****************** Function to handle search query change (End)********************

  //******************Function to handle Sorting (Start)********************
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    let sortableData = [...currentData];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [sortConfig, currentData]);
  //******************Function to handle Sorting (End)********************

  //*******Logic to calculate the index of the first and last item of the current page (Start)********
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDataToDisplay = sortedData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //*******Logic to calculate the index of the first and last item of the current page (End)********

  return (
    <>
      <h1 className="font-extrabold text-4xl p-2 text-center mt-[-50px]">
        Property Landing Page
      </h1>
      <section className="p-3 sm:p-5">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-slate-100  relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <Search value={searchQuery} onChange={handleSearchChange} />
            </div>

            <TableData
              data={currentDataToDisplay}
              setData={setCurrentData}
              headers={headers}
              handleSort={handleSort}
              sortConfig={sortConfig}
            />

            <Pagination
              totalItems={currentData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              currentItemCount={currentDataToDisplay.length}
              indexOfFirstItem={indexOfFirstItem}
            />
          </div>
        </div>
      </section>
    </>
  );
}
