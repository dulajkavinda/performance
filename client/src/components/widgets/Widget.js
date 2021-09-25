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
  } = performanceData;

  const mem = { freeMem, totalMem, memUsage, usedMem };
  const info = { osType, uptime, cpuModel, cpuSpeed, numCpus };
  const cpu = { cpuLoad, numCpus, cpuSpeed, cpuModel };

  return (
    <div>
      <h1>widget</h1>
      <Cpu cpuData={cpu} />
      {/* <Memory memData={mem} />
      <Info infoData={info} /> */}
    </div>
  );
}
