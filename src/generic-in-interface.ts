// Generic Interface---

interface CrushType<T, U = null | undefined> {
  name: string;
  husband: T;
  wife?: U;
}
const c1: CrushType<boolean, string> = {
  name: "Tanvir",
  husband: true,
};
const c2: CrushType<string, string> = {
  name: "Tanvir",
  husband: "Rahman",
  wife: "Medona",
};

interface OfficeWork {
  name: string;
  work: string;
}
const c3: CrushType<OfficeWork> = {
  name: "Baiden",
  husband: {
    name: "Harris",
    work: "USA Office",
  },
};

// Generic Interface for Objects---
interface Persons {
  name: string;
  age: number;
}

const crush4: CrushType<Persons, Persons> = {
  name: "Ishi Pishi",
  husband: {
    name: "Mishi",
    age: 856,
  },
  wife: {
    name: "Tushi",
    age: 50,
  },
};
