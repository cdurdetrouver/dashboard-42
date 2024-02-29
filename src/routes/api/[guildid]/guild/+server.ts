import { API_ENDPOINT, authmdp } from "$env/static/private";

export const GET = async ({ request, url, params }) => {
  const auth = request.headers.get("Authorization");

  if (auth != authmdp) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const access_token = url.searchParams.get("token");

  // console.log(`Bot ${access_token?.replaceAll('"', "")}`);

  const guild = await fetch(`${API_ENDPOINT}/guilds/${params.guildid}`, {
    headers: {
      Authorization: `Bot ${access_token?.replaceAll('"', "")}`,
    },
  }).then((res) => res.json());

  // console.log(guild);

  if (guild.message === "401: Unauthorized") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ guild: guild }), {
    status: 200,
  });
};
