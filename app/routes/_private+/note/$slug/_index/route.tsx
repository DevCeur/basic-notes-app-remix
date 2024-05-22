import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ params }) => {
  const slug = params?.slug;

  return json({ slug });
};

export default function NoteRoute() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Note: {loaderData?.slug}</h1>
    </div>
  );
}
