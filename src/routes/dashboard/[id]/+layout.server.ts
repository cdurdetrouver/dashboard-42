import { authmdp, bottoken } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

export const load = async ({ params, fetch, url }) => {
  const { id } = params;

  const fetchGuild = async () => {
    const res = await fetch(`/api/${id}/guild?token=${bottoken}`, {
      headers: {
        Authorization: authmdp,
      },
    }).catch((err) => {
      console.error(err);
      return redirect(302, "/");
    });

    const data = await res?.json();

    return data.guild;
  };

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

    if (check === false) return redirect(302, `/dashboard/${id}`);
  };

  if (!url.pathname.endsWith(id)) {
    await fetchResponse();
  }

  return {
    server: await fetchGuild(),
  };
};
