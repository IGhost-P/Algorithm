const calculateFee = (fee, baseTime, baseFee, unitTime, unitFee) => {
  if (fee <= baseTime) return baseFee;
  return baseFee + Math.ceil((fee - baseTime) / unitTime) * unitFee;
};

const calculateTime = (inTime, outTime) => {
  const [inHour, inMinute] = inTime.split(":").map(Number);
  const [outHour, outMinute] = outTime.split(":").map(Number);
  const inTimeMinute = inHour * 60 + inMinute;
  const outTimeMinute = outHour * 60 + outMinute;
  return outTimeMinute - inTimeMinute;
};

const setRecords = (records) => {
  const Recordes = new Map();
  const carFees = new Map();
  records.forEach((record) => {
    const [time, carNum, status] = record.split(" ");
    if (Recordes.has(carNum)) {
      const inTime = Recordes.get(carNum);
      const fee = calculateTime(inTime, time);
      if (carFees.has(carNum)) {
        carFees.set(carNum, carFees.get(carNum) + fee);
      } else {
        carFees.set(carNum, fee);
      }
      Recordes.delete(carNum);
    } else {
      Recordes.set(carNum, time);
    }
  });

  if (Recordes.size > 0) {
    Recordes.forEach((inTime, carNum) => {
      const fee = calculateTime(inTime, "23:59");
      if (carFees.has(carNum)) {
        carFees.set(carNum, carFees.get(carNum) + fee);
      } else {
        carFees.set(carNum, fee);
      }
    });
    Recordes.clear();
  }

  return [Recordes, carFees];
};

const calculateMinute = (hour, minute) => {
  return hour * 60 + minute;
};

function solution(fees, records) {
  const answerList = [];

  const [baseTime, baseFee, unitTime, unitFee] = fees;
  const [Recordes, carFees] = setRecords(records);

  carFees.forEach((fee, carNum) => {
    answerList.push([
      carNum,
      calculateFee(fee, baseTime, baseFee, unitTime, unitFee),
    ]);
  });

  answerList.sort((a, b) => {
    if (a[0] == b[0]) {
      return Number(a[1]) - Number(b[1]);
    }
    return Number(a[0]) - Number(b[0]);
  });

  return answerList.map((el) => el[1]);
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:34 5961 OUT",
      "07:34 5961 IN",
      "08:34 5961 OUT",
      "09:34 5961 IN",
      "10:34 5961 OUT",
      "11:34 5961 IN",
      "12:34 5961 OUT",
    ]
  )
);
