// code your solution here
const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
  //...
];
function superbowlWin(arr) {
    
  const obj = arr.find((element) => element.result === "W");
 return obj ? obj.year : undefined
  
}
const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]

console.log(superbowlWin(record));
console.log(superbowlWin(sadReality));

