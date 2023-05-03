// a type is dependent on another type
type a1 = string;
type a3 = undefined;
type a4 = number;

//Nested Conditional Type----

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

// Example-----
type Sheikh = {
  wife1: string;
  wife2: string;
};

type Cheakings<T> = T extends { wife2: string } ? true : false;
type CheakWife2 = Cheakings<Sheikh>;

// cheak korbe ei sheikh type a wife 1 ase kina ? true:false

type A = keyof Sheikh; // "wife1" | "wife2"

type Cheaking<T, K> = K extends keyof Sheikh ? true : false;

type CheakWife1 = Cheaking<Sheikh, "wife1">;

////Matha Kharap Example----------

type myFullName = "Tanvir" | "Rahman" | "Shafin";
type removeName<T> = T extends "Shafin" ? never : T;
type myName = removeName<myFullName>;

// 2nd vabeo hoy----

type LeaderName = "Obama" | "Laden" | "CIA";
type removePerson<T, K> = T extends K ? never : T;
type Peace = removePerson<LeaderName, "Laden">;
