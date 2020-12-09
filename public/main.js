let n = 1;
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  n++;
  request.open("GET", `/page${n}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const arr = JSON.parse(request.response);
      arr.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element.id;
        list.appendChild(li);
      });
    }
  };
  request.send();
};
getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/1.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    }
  };
  request.send();
};

getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const style = document.createElement("style");
      style.innerHTML = request.response;
      document.body.appendChild(style);
    }
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/main2");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
    }
  };
  request.send();
};

getJSONObj.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/getObject");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(JSON.parse(request.response));
    }
  };
  request.send();
};
