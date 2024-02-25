import { clientdb } from "$lib/database";

export async function load({ params }) {
  const { id } = params;
  await clientdb.connect();
  const db = clientdb.db("guild");
  const usercollec = db.collection("user");
  let users: any = await usercollec.find({ guildid: id }).toArray();
  await clientdb.close();

  users = users.map((user: any) => ({ ...user, _id: user._id.toString() }));

  return {
    users,
  };
}
