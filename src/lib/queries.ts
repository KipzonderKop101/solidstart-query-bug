"use server";
// MARK ENTIRE FILE AS SERVER-SIDE ONLY

import { query } from "@solidjs/router";
import { randomHelperFunction } from "./randomHelperFunction";

// This is a simple query that calls a helper function. This should only run on the server, since it's marked "use server";
export const getSomeData = query(async () => {
  console.log("Query is called!");

  randomHelperFunction();
}, "get-some-data");
