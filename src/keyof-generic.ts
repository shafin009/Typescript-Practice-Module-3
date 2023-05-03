type Person = {
  name: string;
  age: number;
  address: number;
};
type newType = "name" | "age" | "address"; //manually kora eta--

type newKeyof = keyof Person;

// const a: newType = "address";

function propertyGet<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}
const result100 = propertyGet({ name: "Tanvir", age: 205 }, "age");

//That means Y ='name' | 'age'
