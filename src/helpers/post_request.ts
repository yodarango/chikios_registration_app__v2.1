export const postReq = async (url: string, data: object, log?: boolean) => {
  const request = await fetch(url, {
    method: "POST",
    //mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await request.json();
  return response;
  if (log) {
    console.log(response);
  }
};
