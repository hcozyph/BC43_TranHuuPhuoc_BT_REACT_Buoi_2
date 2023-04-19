const url = "./dataGlasses.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(typeof data); // object
    // sử dụng data để thêm dữ liệu vào DOM
  })