import React, { useEffect, useState } from "react";
import {
  ContentPart,
  DropDownContainer,
  DropDownOption,
  DropDownSelect,
  PageTitle,
  PageTitleContainer,
  PaginationAndDropDown,
  SearchAndFilter,
  SearchAndPagination,
  TableData,
  TableHeading,
  TablePart,
  ViewButton,
} from "./style";
import FailedStatus from "../../images/FailedStatus.svg";
import DownloadedStatus from "../../images/DownloadedStatus.svg";
import Filter from "../../images/Filter.svg";
import Card from "./Card";
import axios from "axios";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "./function";
import StatusBar, { StatusImage } from "./StatusBar";

function LandingPage() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/appliances")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
        setCount(Math.ceil(response.data.length / itemsPerPage));
        setCurrentPageData(response.data, 1, itemsPerPage);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handlePaginationChange = (event, value) => {
    setPage(value);
    setCurrentPageData(filteredData, value, itemsPerPage);
  };

  const setCurrentPageData = (dataArray, page, itemsPerPage) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    setCurrentData(dataArray.slice(startIndex, endIndex));
  };

  const viewAppliance = (id) => {
    navigate(`/appliance/${id}`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    let filtered = [];
    if (event.target.value === "") {
      filtered = data;
    } else {
      filtered = data.filter((item) =>
        item.serialNo.toLowerCase().includes(event.target.value.toLowerCase())
      );
    }
    setFilteredData(filtered);
    setCount(Math.ceil(filtered.length / itemsPerPage));
    setCurrentPageData(filtered, 1, itemsPerPage);
    setPage(1);
  };

  const handleItemsPerPageChange = (event) => {
    const newItemsPerPage = Number(event.target.value);
    setItemsPerPage(newItemsPerPage);
    setCount(Math.ceil(filteredData.length / newItemsPerPage));
    setCurrentPageData(filteredData, 1, newItemsPerPage);
    setPage(1);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <PageTitleContainer>
        <PageTitle>Devices</PageTitle>
      </PageTitleContainer>
      <ContentPart>
        <StatusBar data={data} />
        <TablePart>
          <SearchAndPagination>
            <SearchAndFilter>
              <input
                type="text"
                placeholder="Search by Serial No"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <img src={Filter} alt="Filter" />
            </SearchAndFilter>
            <PaginationAndDropDown>
              <DropDownContainer>
                <label htmlFor="itemsPerPage">Show</label>
                <DropDownSelect
                  name="itemsPerPage"
                  id="itemsPerPage"
                  onChange={handleItemsPerPageChange}
                  value={itemsPerPage}
                >
                  <DropDownOption value={5}>5</DropDownOption>
                  <DropDownOption value={10}>10</DropDownOption>
                  <DropDownOption value={15}>15</DropDownOption>
                  <DropDownOption value={20}>20</DropDownOption>
                  <DropDownOption value={25}>25</DropDownOption>
                </DropDownSelect>
              </DropDownContainer>
              <Pagination
                count={count}
                page={page}
                onChange={handlePaginationChange}
              />
            </PaginationAndDropDown>
          </SearchAndPagination>
          <table>
            <thead>
              <tr>
                <TableHeading>Device Serial</TableHeading>
                <TableHeading>Location</TableHeading>
                <TableHeading>Bandwidth</TableHeading>
                <TableHeading>Status</TableHeading>
                <TableHeading>Download Status</TableHeading>
                <TableHeading>OS Version</TableHeading>
              </tr>
            </thead>
            <tbody>
              {currentData.map((appliance) => (
                <tr key={appliance.serialNo}>
                  <TableData>{appliance.serialNo}</TableData>
                  <TableData>
                    {appliance.location.city} <br />
                    <span style={{ color: "#084782" }}>
                      {appliance.location.state}, {appliance.location.country}
                    </span>
                  </TableData>
                  <TableData>
                    {appliance.bandwidth} <br />
                    <span style={{ color: "#69788C" }}>
                      {appliance.avgBandwidth}
                    </span>
                  </TableData>
                  <TableData>
                    <Card
                      image={
                        appliance.deviceStatus === "offline"
                          ? FailedStatus
                          : DownloadedStatus
                      }
                      Text={capitalizeFirstLetter(appliance.deviceStatus)}
                    />
                  </TableData>
                  <TableData>
                    <Card
                      image={StatusImage(appliance.downloadStatus)}
                      Text={capitalizeFirstLetter(appliance.downloadStatus)}
                    />
                  </TableData>
                  <TableData>{appliance.osVersion}</TableData>
                  <TableData onClick={() => viewAppliance(appliance.serialNo)}>
                    <ViewButton>View</ViewButton>
                  </TableData>
                </tr>
              ))}
            </tbody>
          </table>
        </TablePart>
      </ContentPart>
    </>
  );
}

export default LandingPage;
