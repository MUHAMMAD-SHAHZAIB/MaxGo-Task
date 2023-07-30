// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDataById } from "../Api/Utils";
// import { FaArrowLeftLong } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchDataById(id).then((fetchedData) => {
      setData(fetchedData);
    });
  }, [id]);

  return (
    <div className=" card flex items-center justify-center h-screen">
      <a
        href="#"
        className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
      >
        <img
          className="object-cover  w-full rounded-t-lg h-96 md:h-96 md:w-48 md:rounded-none md:rounded-l-lg"
          src={data.imageUrl}
          alt=""
        />

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h1 className="border-b-2 text-2xl font-bold tracking-tight flex justify-center">
            Property Detail Page
          </h1>

          <div className="flex border-b-2 items-center justify-between">
            <div className=" p-2">
              <span className="font-semibold">Title : </span>
              <span>{data.title}</span>
            </div>
            <span className="text-red-600">Card Id:{data.id}</span>
          </div>
          <div className="border-b-2 p-2">
            <span className="font-semibold">Price : </span>
            {data.price}
          </div>
          <div className="border-b-2 p-2">
            <span className="font-semibold">PropertyType : </span>
            <span>{data.propertyType}</span>
          </div>

          <div className="border-b-2 p-2">
            <span className="font-semibold">Address : </span>
            {data.address}
          </div>

          <div className="border-b-2 p-2">
            <span className="font-semibold">Area : </span>
            {data.coveredAreaSQFT + " AreaSQFT"}
          </div>

          <div className="flex gap-5  p-2">
            <div>
              <span className="font-semibold">No of Beds : </span>
              <span>{data.beds}</span>
            </div>
            <div>
              <span className="font-semibold">No of Bath : </span>
              <span>{data.bath}</span>
            </div>
          </div>

          <button
            onClick={handleGoBack}
            type="button"
            className="flex justify-center gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            <FaArrowLeftLong size={20} />
            Back Button
          </button>
        </div>
      </a>
    </div>
  );
}
