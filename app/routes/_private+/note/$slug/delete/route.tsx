import { json } from "@remix-run/node";

import type { ActionFunction } from "react-router";

export const action: ActionFunction = () => {
  return json({ hello: "world" });
};
