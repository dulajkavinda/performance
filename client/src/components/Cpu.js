import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Cpu(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, [props.cpuData.cpuModel]);

  if (isLoading) {
    return null;
  }
  return (
    <div className="cpu_main">
      <div className="cpu_wrapper">
        <div className="cpu_wrapper_main">
          <div className="cpu_circle">
            <CircularProgressbarWithChildren
              value={props.cpuData.cpuLoad}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#A1A2EC",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "#C6C7FF",
              })}
            >
              {props.cpuData.cpuModel.toLowerCase().includes("intel") ? (
                <img
                  style={{ width: 100, marginTop: -5, opacity: 0.7 }}
                  src="./intel.png"
                  alt="Intel"
                />
              ) : props.cpuData.cpuModel.toLowerCase().includes("amd") ? (
                <img
                  style={{ width: 100, marginTop: -5, opacity: 0.7 }}
                  src="./amd.png"
                  alt="AMD"
                />
              ) : (
                <img
                  style={{ width: 100, marginTop: -5, opacity: 0.7 }}
                  src="./cpu.png"
                  alt="AMD"
                />
              )}
            </CircularProgressbarWithChildren>
          </div>
          <div className="cpu_data">
            <div className="cpu_data_perc">
              <span className="cpu_data_num">{props.cpuData.cpuLoad}</span>
              <span className="cpu_data_num_per">%</span>
            </div>
            <div className="cpu_data_info">
              <div className="cpu_data_cpus">
                <span className="cpu_data_label">CPUs</span>
                <span className="cpu_data_data"> {props.cpuData.numCpus}</span>
              </div>
              <div className="cpu_data_cpus">
                <span className="cpu_data_label">CPU Speed</span>
                <span className="cpu_data_data"> {props.cpuData.cpuSpeed}</span>
              </div>
            </div>
          </div>
        </div>
        <span className="cpu_data_model"> {props.cpuData.cpuModel}</span>
      </div>
    </div>
  );
}
