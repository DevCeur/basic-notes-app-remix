import { json } from "@remix-run/node";

import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = ({ params }) => {
  return json({ slug: params?.slug });
};

export default function EditNoteRoute() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Edit Note: {loaderData?.slug}</h1>
    </div>
  );
}
