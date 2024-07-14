// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getData() {
  return {
    name: "육민우",
    id: "FickleBoBo",
  };
}

// Promise를 반환하는 함수면 async 키워드가 하는 일이 없다
async function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "육민우",
        id: "FickleBoBo",
      });
    }, 1500);
  });
}

console.log(getData());
console.log(getData2());

// awite
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
