import React from "react";
import { DeviceMoniteringCards } from "./style";
import FailedStatus from "../../images/FailedStatus.svg";
import DownloadingStatus from "../../images/DownloadingStatus.svg";
import CancelledStatus from "../../images/CancelledStatus.svg";
import DownloadedStatus from "../../images/DownloadedStatus.svg";
import ScheduledStatus from "../../images/ScheduledStatus.svg";
import Card from "./Card";

function countStatuses(data) {
  return data.reduce((counts, appliance) => {
    const status = appliance.downloadStatus.toLowerCase();
    counts[status] = (counts[status] || 0) + 1;
    return counts;
  }, {});
}

export const StatusImage = (status) => {
  if (status === "failed") return FailedStatus;
  if (status === "cancelled") return CancelledStatus;
  if (status === "scheduled") return ScheduledStatus;
  if (status === "downloading") return DownloadingStatus;
  if (status === "succeeded") return DownloadedStatus;
};

function StatusBar({ data }) {
  const statusCounts = countStatuses(data);

  return (
    <DeviceMoniteringCards>
      <Card
        image={FailedStatus}
        Count={statusCounts["failed"] || 0}
        Text={"Failed"}
      />
      <Card
        image={CancelledStatus}
        Count={statusCounts["cancelled"] || 0}
        Text={"Cancelled"}
      />
      <Card
        image={ScheduledStatus}
        Count={statusCounts["scheduled"] || 0}
        Text={"Scheduled"}
      />
      <Card
        image={DownloadingStatus}
        Count={statusCounts["downloading"] || 0}
        Text={"Downloading"}
      />
      <Card
        image={DownloadedStatus}
        Count={statusCounts["succeeded"] || 0}
        Text={"Downloaded"}
      />
    </DeviceMoniteringCards>
  );
}

export default StatusBar;
