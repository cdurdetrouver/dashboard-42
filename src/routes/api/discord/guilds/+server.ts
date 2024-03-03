import { API_ENDPOINT, authmdp } from "$lib/env";

export const GET = async ({ request, url }) => {
  const auth = request.headers.get("Authorization");

  if (auth != authmdp) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const access_token = url.searchParams.get("token");

  // console.log(`Bearer ${access_token?.replaceAll('"', "")}`);

  const guilds = await fetch(`${API_ENDPOINT}/users/@me/guilds`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json());

  if (guilds.message === "401: Unauthorized") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  let guilds2: any[] = [];

  guilds.forEach((guild: any) => {
    if ((guild.permissions & (1 << 3)) === 1 << 3) {
      guilds2.push(guild);
    }
  });

  return new Response(JSON.stringify({ guilds: guilds2 }), {
    status: 200,
  });
};
