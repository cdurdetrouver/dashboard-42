import { clientdb } from "$lib/database";
import { authmdp } from "$env/static/private";

export const GET = async ({ request }) => {
  const auth = request.headers.get("Authorization");

  if (auth != authmdp) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const guildcollec = clientdb.db("guild").collection("guild");

  const guilds = await guildcollec.find().toArray();

  return new Response(JSON.stringify({ guilds: guilds }), {
    status: 200,
  });
};
