import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Memory(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, [props.memData.totalMem]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="memory_main">
      <div className="mem_wrapper">
        <div className="mem_wrapper_main">
          <div className="mem_circle">
            <CircularProgressbarWithChildren
              value={props.memData.memUsage * 100}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#FFD27B",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "#FFE8BA",
              })}
            >
              <img
                style={{ width: 80, opacity: 0.7 }}
                src="./ram.png"
                alt="RAM"
              />
              <div style={{ fontSize: 12, marginTop: 5 }}>
                <span className="mem_circle">
                  {((props.memData.totalMem / 1073741824) * 100) / 100}GB
                </span>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className="mem_data">
            <div className="cpu_data_perc">
              <span className="cpu_data_num">
                {props.memData.memUsage * 100}
              </span>
              <span className="cpu_data_num_per">%</span>
            </div>
            <div className="cpu_data_info">
              <div className="cpu_data_cpus">
                <span className="cpu_data_label">Total</span>
                <span className="cpu_data_data">
                  {((props.memData.totalMem / 1073741824) * 100) / 100} GB
                </span>
              </div>
              <div className="cpu_data_cpus">
                <span className="cpu_data_label">Used</span>
                <span className="cpu_data_data">
                  {Math.floor((props.memData.usedMem / 1073741824) * 100) / 100}{" "}
                  GB
                </span>
              </div>
              <div className="cpu_data_cpus">
                <span className="cpu_data_label">Free</span>
                <span className="cpu_data_data">
                  {Math.floor((props.memData.freeMem / 1073741824) * 100) / 100}{" "}
                  GB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
