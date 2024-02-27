import { clientdb } from "$lib/database";
import { authmdp } from "$env/static/private";

export const GET = async ({ request, params }) => {
  const auth = request.headers.get("Authorization");

  if (auth != authmdp) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  // console.log(params.guildid);

  const usercollec = clientdb.db("guild").collection("user");

  const users = await usercollec.find({ guildid: params.guildid }).toArray();

  return new Response(JSON.stringify({ users: users }), {
    status: 200,
  });
};
