import React, { useState, useEffect } from "react";

export default function Info(props) {
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    setPerformanceData(props.data);
  }, [props.data]);
  return (
    <div>
      <h3>info</h3>
    </div>
  );
}
