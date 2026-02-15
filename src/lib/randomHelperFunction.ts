/**
 * This helper function is designed to fail. It should only run on the server, since it's NEVER imported on the client.
 * @returns
 */
export const randomHelperFunction = async () => {
  console.log("This should only show on the server!");

  const res = await fetch("https://api.typeform.com/forms/");

  if (!res.ok) {
    throw new Error("This error should only be thrown on the server!");
  }

  const data = await res.json();

  return data;
};
