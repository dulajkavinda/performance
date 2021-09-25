import React, { useState, useEffect } from "react";

import Cpu from "../Cpu";
import Memory from "../Memory";
import Info from "../Info";

export default function Widget(props) {
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    setPerformanceData(props.data);
  }, [props.data]);

  const {
    freeMem,
    totalMem,
    memUsage,
    osType,
    uptime,
    cpuModel,
    cpuSpeed,
    numCpus,
    cpuLoad,
    usedMem,
    isActive,
    macA,
  } = performanceData;

  const mem = { freeMem, totalMem, memUsage, usedMem };
  const info = { osType, uptime, cpuModel, cpuSpeed, numCpus, isActive, macA };
  const cpu = { cpuLoad, numCpus, cpuSpeed, cpuModel };
  let notActiveDiv = "";

  // if (!isActive) {
  //   return null;
  // }

  return (
    <div className="widget_main">
      {/* <h3>
        PC ID: {macA} -{" "}
        {!isActive ? (
          <span style={{ color: "red" }}>Offline</span>
        ) : (
          <span style={{ color: "green" }}>Online</span>
        )}
      </h3> */}
      <div className="widget_wrapper">
        <Cpu cpuData={cpu} />
        <Memory memData={mem} />
        <Info infoData={info} />
      </div>
    </div>
  );
}
