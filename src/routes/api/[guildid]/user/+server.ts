import { authmdp } from "$env/static/private";

export const GET = async ({ request, url, params }) => {
  const auth = request.headers.get("Authorization");

  if (auth != authmdp) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const access_token = url.searchParams.get("token");
  const user = url.searchParams.get("search")?.replaceAll('"', "");

  // console.log(`Bot ${access_token?.replaceAll('"', "")}`);

  const users = await fetch(
    `https://discord.com/api/v10/guilds/${params.guildid}/members/search?query=${user}&limit=2`,
    {
      headers: {
        Authorization: `Bot ${access_token?.replaceAll('"', "")}`,
      },
    }
  ).then((res) => res.json());

  // console.log(guild);

  if (users.message === "401: Unauthorized") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ users: users }), {
    status: 200,
  });
};
