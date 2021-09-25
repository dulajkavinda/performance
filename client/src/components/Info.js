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
          <span>Operating System</span>
          <span id="os_name">{props.infoData.osType}</span>
        </div>
        <div className="time_online">
          <span>Time Online</span>
          <span id="time">
            {moment.duration(props.infoData.uptime).humanize()}
          </span>
        </div>
      </div>
    </div>
  );
}
