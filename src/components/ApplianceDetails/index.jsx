import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  BreadCrumbsArrow,
  BreadCrumbsContainer,
  BreadCrumbsFirstPart,
  CurrentSerialNo,
  DataDisplay,
  DataDisplayData,
  DataDisplayLable,
  DataDisplayRow,
  DeviceDetails,
  DeviceDetailsConatiner,
  DeviceFullDetails,
  LocationDetails,
  Tab,
  Tabs,
  Tag,
  Tags,
  Title,
  TitleButton,
  TitleButtons,
  TitleContainer,
} from "./style";
import shape from "../../images/shape.svg";
import logs from "../../images/logs.svg";
import Sppentest from "../../images/Sppentext.svg";
import FailedStatus from "../../images/FailedStatus.svg";
import DownloadedStatus from "../../images/DownloadedStatus.svg";
import ViewPieChart from "../../images/ViewPieChart.svg";
import { capitalizeFirstLetter } from "../LandingPage/function";
import { ContentPart } from "../LandingPage/style";

const ApplianceDetails = () => {
  const { id } = useParams();
  const [appliance, setAppliance] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/v1/appliance/${id}/info`)
      .then((response) => setAppliance(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const viewAppliances = (id) => {
    navigate(`/`);
  };

  if (!appliance) return <div>Loading...</div>;

  return (
    <>
      <BreadCrumbsContainer>
        <BreadCrumbsFirstPart onClick={viewAppliances}>
          Devices
        </BreadCrumbsFirstPart>
        <BreadCrumbsArrow src={shape} />
        <CurrentSerialNo>{appliance.serialNo}</CurrentSerialNo>
      </BreadCrumbsContainer>
      <DeviceDetailsConatiner>
        <DeviceDetails>
          <TitleContainer>
            <Title>{appliance.serialNo}</Title>
            <TitleButtons>
              <TitleButton src={Sppentest} alt="" />

              <TitleButton src={logs} alt="" />
            </TitleButtons>
          </TitleContainer>
          <LocationDetails>
            {appliance.location.city} <br />
            <span style={{ color: "#084782" }}>
              {appliance.location.state}, {appliance.location.country}
            </span>
          </LocationDetails>
          <Tags>
            <Tag>
              <img
                src={
                  appliance.deviceStatus === "offline"
                    ? FailedStatus
                    : DownloadedStatus
                }
                alt=""
              />

              {capitalizeFirstLetter(appliance.deviceStatus)}
            </Tag>
            <Tag style={{ width: "100px" }}>
              <img src={ViewPieChart} alt="ViewPieChart" />

              {appliance.avgBandwidth}
            </Tag>
          </Tags>
        </DeviceDetails>
        <Tabs>
          <Tab>Details</Tab>
          <Tab>Content</Tab>
          <Tab>Bandwidth</Tab>
        </Tabs>
      </DeviceDetailsConatiner>
      <ContentPart>
        <DeviceFullDetails>
          <DataDisplayRow>
            <DataDisplay>
              <DataDisplayLable>Device Serial</DataDisplayLable>
              <DataDisplayData>{appliance.serialNo}</DataDisplayData>
            </DataDisplay>
            <DataDisplay>
              <DataDisplayLable>Location</DataDisplayLable>
              <DataDisplayData>{appliance.location.city}</DataDisplayData>
            </DataDisplay>
            <DataDisplay>
              <DataDisplayLable>City</DataDisplayLable>
              <DataDisplayData>
                {appliance.location.state}, {appliance.location.country}
              </DataDisplayData>
            </DataDisplay>
            <DataDisplay>
              <DataDisplayLable>ISP Payment Responsibility</DataDisplayLable>
              <DataDisplayData>
                {appliance.ispPaymentResponsibility}
              </DataDisplayData>
            </DataDisplay>
          </DataDisplayRow>
          <DataDisplayRow>
            <DataDisplay>
              <DataDisplayLable>Bandwidth</DataDisplayLable>
              <DataDisplayData>{appliance.bandwidth}</DataDisplayData>
            </DataDisplay>
            <DataDisplay>
              <DataDisplayLable>Average Bandwidth</DataDisplayLable>
              <DataDisplayData>{appliance.avgBandwidth}</DataDisplayData>
            </DataDisplay>
            <DataDisplay>
              <DataDisplayLable>Plan Start Date</DataDisplayLable>
              <DataDisplayData>
                {new Date(appliance.planStartDate).toLocaleDateString()}
              </DataDisplayData>
            </DataDisplay>
            <DataDisplay>
              <DataDisplayLable>Billing Cycle</DataDisplayLable>
              <DataDisplayData>{appliance.billingCycle}</DataDisplayData>
            </DataDisplay>
          </DataDisplayRow>
          <DataDisplayRow>
            <DataDisplay>
              <DataDisplayLable>Download Status</DataDisplayLable>
              <DataDisplayData>{appliance.downloadStatus}</DataDisplayData>
            </DataDisplay>
            <DataDisplay>
              <DataDisplayLable>OS Version</DataDisplayLable>
              <DataDisplayData>{appliance.osVersion}</DataDisplayData>
            </DataDisplay>
            <DataDisplay>
              <DataDisplayLable>Storage Available</DataDisplayLable>
              <DataDisplayData>{appliance.storage}</DataDisplayData>
            </DataDisplay>
          </DataDisplayRow>
        </DeviceFullDetails>
      </ContentPart>
    </>
  );
};

export default ApplianceDetails;
