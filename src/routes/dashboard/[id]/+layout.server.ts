import { error, redirect } from "@sveltejs/kit";
import { data } from "$lib/data";

export function load({ params }) {
  const post = data.find((data) => data.id === params.id);

  if (!post) throw error(404);

  // const connexion = false;

  // if (!connexion) redirect(302, `/dashboard/${params.id}/invite`);

  return {
    post,
  };
}
