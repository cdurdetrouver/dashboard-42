import { API_ENDPOINT, authmdp } from "$lib/env";

export const GET = async ({ request, url, params }) => {
  const auth = request.headers.get("Authorization");

  if (auth != authmdp) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const access_token = url.searchParams.get("token");

  // console.log(`Bot ${access_token?.replaceAll('"', "")}`);

  const channels = await fetch(
    `${API_ENDPOINT}/guilds/${params.guildid}/channels`,
    {
      headers: {
        Authorization: `Bot ${access_token?.replaceAll('"', "")}`,
      },
    }
  ).then((res) => res.json());

  if (channels.message === "401: Unauthorized") {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ channels: channels }), {
    status: 200,
  });
};
