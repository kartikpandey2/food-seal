const baseurl = `https://developers.zomato.com/api/v2.1/`;

const Fetch = async query => {
  const response = await fetch(`${baseurl}${query}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "user-key": "657693eec358398b6e7fa690b531f7a7"
    }
  });
  return response.json();
};

export default Fetch;
