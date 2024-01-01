import Cookies from "js-cookie";

const asyncAPICall = async (
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

  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  });
  return response.json();
};

export default asyncAPICall;
