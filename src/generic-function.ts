// Arrow Function Simple-----

const arrayCreate = (param: string): string[] => {
  return [param];
};

//Generic type Arrow Function---
const arrayCreate1 = <T>(param: T): T[] => {
  return [param];
};
const result111 = arrayCreate1<string>("Bomb");
const result2 = arrayCreate1<number>(100);

//Generic type Arrow Function with Object Interface---
interface BD {
  name: string;
}
const result3 = arrayCreate1<BD>({ name: "Bangladesh" });

// Making Generic Tuple function-----
const arrayCreate12 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const result = arrayCreate12<string, number>("Bom Bom", 630);

// nicher 2 vabei likha jay-----
const result11 = arrayCreate12<number, [string]>(100, ["Phone"]);
const result1 = arrayCreate12<number, Array<string>>(100, ["Phone"]);

// Spread Operator (Arrow Function)-----

// const newDatas = { ...myInfo, capital }; ---simple method

const addCapitals = <T>(myInfo: T) => {
  const capital = "Dhaka";

  const newDatasss = { ...myInfo, capital };
  return newDatasss;
};

const myInfos = {
  name: "Bangladesh",
  age: 50,
  year: 1971,
};
const resultsBD = addCapital(myInfo);

// Spread Operator (Normal Function)-----

function createArray<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}
