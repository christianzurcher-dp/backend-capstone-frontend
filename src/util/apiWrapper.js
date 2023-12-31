// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });

import Cookies from "js-cookie";

const asyncAPICall = (
  url = "",
  method = "",
  body = {},
  requiresAuth = false
) => {
  let headers = { "Content-Type": "application/json" };

  if (requiresAuth) {
    headers["auth"] = Cookies.get("auth");
  }

  url = `http://localhost:8086${url}`;

  response = fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  });
  return response.json();
};
