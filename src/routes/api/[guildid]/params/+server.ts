import { clientdb } from "$lib/database";
import { authmdp } from "$lib/env";

export const GET = async ({ request, params }) => {
  const auth = request.headers.get("Authorization");

  if (auth != authmdp) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const guildcollec = clientdb.db("guild").collection("guild");

  const guild = await guildcollec.findOne({ guildid: params.guildid });

  if (!guild) {
    return new Response(JSON.stringify({ message: "No guild found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify({ guild: guild }), {
    status: 200,
  });
};
