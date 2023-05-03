type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}
// Note:- 1.type use korbo premitive data er jonno.
// 2.Interface use korbo object data er jonno.

const userTypeAlias: User = {
  name: "Tanvir Rahman",
  age: 400,
};

const userTypeInterface: IUser = {
  name: "Tanvir",
  age: 500,
};

// interface k Extend korar system---

interface IExtendedUser extends IUser {
  role: string;
}

const user40: IExtendedUser = {
  name: "Rahman",
  age: 526,
  role: "Developer",
};

// type k Extend korar system---
type extendedUser = User & {
  work: string;
};
const user400: extendedUser = {
  name: "Rahman",
  age: 526,
  work: "Developer",
};

// type Alias dhara function---
type addNumbersType = (num1: number, num2: number) => number;
const addNumbers: addNumbersType = (num1, num2) => num1 + num2;

// Interface dhara function---

interface addNum {
  (num1: number, num2: number): number;
}
const addNumber: addNum = (num1, num2) => num1 + num2;

// Array with type----

type RollLeader = number[];
const leaderRoll: RollLeader = [4858, 8565, 45585];

// Array with interface---- with index signature
interface RollLeaders {
  [index: number]: number;
}
const leaderRolls: RollLeaders = [4858, 8565, 45585];
