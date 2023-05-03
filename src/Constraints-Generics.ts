// const newData = { ...myInfo, capital };

interface Mandatory {
  name: string;
  age: number;
  year: number;
}

const addCapital = <T extends Mandatory>(myInfo: T) => {
  const capital = "Dhaka";

  const newDatas = { ...myInfo, capital };
  return newDatas;
};

type myInfoType = {
  name: string;
  age: number;
  year: number;
};

const myInfo: myInfoType = {
  name: "Bangladesh",
  age: 50,
  year: 1971,
};
const resultBD = addCapital(myInfo);
