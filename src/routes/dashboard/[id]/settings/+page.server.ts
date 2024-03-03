import { authmdp, bottoken } from "$lib/env";
import { redirect } from "@sveltejs/kit";

export const load = async ({ params, fetch }) => {
  const { id } = params;

  const fetchResponse = async () => {
    const res = await fetch(`/api/${id}/params`, {
      headers: {
        Authorization: authmdp,
      },
    }).catch((err) => {
      console.error(err);
      return null;
    });

    const data = await res?.json();

    return data.guild;
  };

  const fetchChannels = async () => {
    const res = await fetch(`/api/${id}/channels?token=${bottoken}`, {
      headers: {
        Authorization: authmdp,
      },
    }).catch((err) => {
      console.error(err);
      return redirect(302, "/");
    });

    const data = await res?.json();

    return data.channels;
  };

  return {
    guild: await fetchResponse(),
    channels: await fetchChannels(),
  };
};
