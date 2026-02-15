import { query } from "@solidjs/router";
import { randomHelperFunction } from "./randomHelperFunction";

export const getSomeData = query(async () => {
  "use server";

  console.log("Query is called!");

  randomHelperFunction();
}, "get-some-data");
