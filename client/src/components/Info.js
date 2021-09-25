import React, { useEffect, useState } from "react";
import moment from "moment";

export default function Info(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, [props.infoData.osType]);

  if (isLoading) {
    return null;
  }
  return (
    <div>
      <div className="info_main">
        <div className="os">
          <span>PC ID</span>
          <span id="os_name">{props.infoData.macA}</span>
          <span>Operating System</span>
          <span id="os_name">{props.infoData.osType}</span>
        </div>
        <div
          className={
            props.infoData.isActive ? "time_online" : "time_online_offline"
          }
        >
          <span>Time Online</span>
          <span id={props.infoData.isActive ? "time" : "time_off"}>
            {moment.duration(props.infoData.uptime).humanize()}
          </span>
          <span>Status</span>
          <span id={props.infoData.isActive ? "time" : "time_off"}>
            {props.infoData.isActive ? "Active" : "Offline"}
          </span>
        </div>
      </div>
    </div>
  );
}
