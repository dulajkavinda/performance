/**
 * node program to collect server performance
 * data and send that data using socket.io
 * - CPU Load
 * - Memory Usage
 *     - free
 *     - total
 * - OS
 * - Uptime
 */

const os = require("os");

const cpus = os.cpus();

const osType = os.type() === "Darwin" ? "Mac" : os.type();
const uptime = os.uptime();
const freeMem = os.freemem();
const totalMem = os.totalmem();
const usedMem = totalMem - freeMem;
const memUsage = Math.floor((usedMem / totalMem) * 100) / 100;
const cpuModel = cpus[0].model;
const cpuSpeed = cpus[0].speed;
const numCpus = cpus.length;

const cpuAverage = () => {
  const cpus = os.cpus();

  let idleMs = 0;
  let totalMs = 0;

  cpus.forEach((aCore) => {
    for (type in aCore.times) {
      totalMs += aCore.times[type];
    }
    idleMs += aCore.times.idle;
  });

  return {
    idle: idleMs / cpus.length,
    total: totalMs / cpus.length,
  };
};

const getCpuLoad = () => {
  const start = cpuAverage();
  setTimeout(() => {
    const end = cpuAverage();
    const idleDifference = end.idle - start.idle;
    const totalDifference = end.total - start.total;
    const percentageCpu =
      100 - Math.floor((100 * idleDifference) / totalDifference);
    console.log(percentageCpu);
  }, 100);
};

setInterval(() => {
  getCpuLoad();
}, 1000);
