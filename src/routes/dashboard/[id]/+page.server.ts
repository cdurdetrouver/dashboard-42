import { authmdp } from "$lib/env";
import { redirect } from "@sveltejs/kit";

export const load = async ({ params, fetch }) => {
  const { id } = params;

  const fetchResponse = async () => {
    const res = await fetch(`/api/guilds`, {
      headers: {
        Authorization: authmdp,
      },
    }).catch((err) => {
      console.error(err);
      return redirect(302, "/");
    });

    const data = await res?.json();

    let check = false;
    data.guilds.forEach((guild: any) => {
      if (guild.guildid === id) {
        check = true;
      }
    });

    return check;
  };

  return {
    inguild: await fetchResponse(),
  };
};
