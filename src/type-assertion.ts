let emni: any;

emni = "Tanvir Rahman Shafin";

(emni as string).length;

<string>emni.length; // evabeo likha jay

// function kg to gram-----

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The converted Result is ${value}`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const resultNumber = kgToGram(1000) as number;

const resultString = kgToGram("1000") as string;

const resultStrings = <string>kgToGram("1500"); // evabeo likha jay

// Error message writing----

type customError = {
  message: string;
};

try {
} catch (err) {
  console.log((err as customError).message);
}
