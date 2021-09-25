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
  } = performanceData;

  const mem = { freeMem, totalMem, memUsage, usedMem };
  const info = { osType, uptime, cpuModel, cpuSpeed, numCpus };
  const cpu = { cpuLoad, numCpus, cpuSpeed, cpuModel };
  let notActiveDiv = "";

  if (!isActive) {
    notActiveDiv = <div>Offline</div>;
  }

  return (
    <div className="widget_main">
      <Cpu cpuData={cpu} />
      <Memory memData={mem} />
      <Info infoData={info} />
    </div>
  );
}
