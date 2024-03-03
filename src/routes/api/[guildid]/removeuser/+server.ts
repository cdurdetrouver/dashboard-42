import { clientdb } from "$lib/database";
import { authmdp } from "$env/static/private";

export const POST = async ({ request, params }) => {
  const auth = request.headers.get("Authorization");
  const body = await request.json();

  if (auth != authmdp) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const usercollec = clientdb.db("guild").collection("user");

  const user = await usercollec.deleteOne({
    guildid: params.guildid,
    intra: body.intra,
  });

  if (user.deletedCount === 0) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify({ user: user }), {
    status: 200,
  });
};
