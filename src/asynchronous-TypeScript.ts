//JSON PLACEHOLDER

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  return await response.json();
};

const todoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};
todoData();

//mocking----------------

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is Good";

    if (data) {
      resolve(data);
    } else {
      reject("fail data");
    }
  });
};
const getDataPromise = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

// ------------------------
const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;

    if (data) {
      resolve(data);
    } else {
      reject("fail data");
    }
  });
};

const getDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};
// ------------------------

interface DataType {
  name: string;
  age: number;
}

const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { name: "Ali", age: 30 };

    if (data) {
      resolve(data);
    } else {
      reject("fail data");
    }
  });
};

const getDataObject = async (): Promise<DataType> => {
  const data = await makePromiseObject();
  return data;
};
