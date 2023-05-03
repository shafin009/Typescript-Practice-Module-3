// Generic Type----
type ArrayGeneric<T> = Array<T>;

const rolls: ArrayGeneric<number> = [55, 484, 656, 5641];
const rolls2: ArrayGeneric<string> = ["45", "84", "56", "51"];

type RollUser = { name: string; roll: number };

const userRoll: ArrayGeneric<RollUser> = [
  {
    name: "Shafin",
    roll: 588,
  },
  {
    name: "Mr. Tanvir",
    roll: 4589,
  },
];

// Tuple Generic Type----

type TupleGeneric<X, Y> = [X, Y];

const love: TupleGeneric<string, string> = ["Putin", "Victoria"];

// Generic in Interface with Tuple---
interface Relations {
  name: string;
  work: string;
}
const relation: TupleGeneric<Relations, number> = [
  {
    name: "Lal Mia",
    work: "Gun Shop",
  },
  450,
];
