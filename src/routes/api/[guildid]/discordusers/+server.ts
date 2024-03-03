import { API_ENDPOINT, authmdp, bottoken } from "$lib/env";

export const GET = async ({ request, url, params }) => {
  const auth = request.headers.get("Authorization");

  if (auth != authmdp) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const access_token = url.searchParams.get("token");

  const users = await fetch(
    `${API_ENDPOINT}/guilds/${params.guildid}/members?limit=1000&after=0`,
    {
      headers: {
        Authorization: `Bot ${bottoken}`,
      },
    }
  ).then((res) => res.json());

  if (users.message) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const newusers = users
    .filter((item: any) => !item.user.bot)
    .map((item: any) => ({
      username: item.nick || item.user.global_name,
      id: item.user.id,
    }));

  return new Response(JSON.stringify({ users: newusers }), {
    status: 200,
  });
};
