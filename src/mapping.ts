const arrayNums = [1, 2, 3]; //['1','2','3']
const arrayString = arrayNums.map((num) => num.toString());
console.log(arrayString);

// type er upor Map-----
type Volume = {
  height: number;
  width: number;
  depth: number;
};

type Areas = {
  [key in keyof Volume]: Volume[key]; //Dynamic Hoye gelo----
};

type Area<T> = {
  readonly [key in keyof T]: T[key]; //Generic Type------
};

const area1: Area<{ height: number; width: string }> = {
  height: 20,
  width: "50",
};

type AreaString = {
  height: string;
  width: string;
};

type AreaRead = {
  readonly height: number;
  readonly width: number;
};

const bArea: AreaRead = {
  height: 25,
  width: 20,
};

type R = Volume["height"]; //lookup types
type S = keyof Volume; //' width' | 'height' |'Depth'
