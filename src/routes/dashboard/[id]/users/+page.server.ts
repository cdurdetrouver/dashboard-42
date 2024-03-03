import { authmdp } from "$lib/env";

export const actions = {
  default: async ({ request, fetch, cookies, params }) => {
    const formData = await request.formData();
    const discord_user = formData.get("discord-user")?.toString() || "";
    const intra_user = formData.get("intra-user")?.toString() || "";

    const discordusers = JSON.parse(formData.get("users")?.toString() || "[]");

    const token: string = cookies.get("tokenintra")?.toString() || "";

    const result = {
      success: true,
      message: "User successfully add!",
      intraerror: false,
      intrauser: "",
      intramessage: "",
      discorderror: false,
      discorduser: "",
      discordmessage: "",
    };

    let user = { status: 404 };

    const resusers = await fetch(`/api/${params.id}/users`, {
      headers: {
        Authorization: authmdp,
      },
    });

    const users = (await resusers.json())?.users || [];
    let user_in = users.find((item: any) => item.intra === intra_user);

    if (user_in) {
      result.success = false;
      result.intramessage = `Intra user already added!`;
      result.intraerror = true;
      result.intrauser = intra_user;
      result.discorduser = discord_user;
      user.status = 200;
    }

    if (intra_user.length !== 0 && !user_in) {
      user = await fetch(`https://api.intra.42.fr/v2/users/${intra_user}`, {
        headers: {
          Authorization: `Bearer ${token.replaceAll('"', "")}`,
        },
      });
    }

    if (user.status !== 200) {
      result.success = false;
      result.intramessage = intra_user.length
        ? `Intra user ${intra_user} not found!`
        : "Intra user is empty!";
      result.intraerror = true;
      result.intrauser = intra_user;
      result.discorduser = discord_user;
    }

    let user_id = "none";
    if (discord_user.length !== 0) {
      user_id = discordusers.find(
        (item: any) => item.username === discord_user
      )?.id;
    }

    if (!user_id) {
      result.success = false;
      result.discordmessage = `Discord user ${discord_user} not found!`;
      result.discorderror = true;
      result.intrauser = intra_user;
      result.discorduser = discord_user;
    }

    if (result.discorderror || result.intraerror) return result;

    const res = await fetch(`/api/${params.id}/newuser`, {
      method: "POST",
      headers: {
        Authorization: authmdp,
      },
      body: JSON.stringify({
        discord_id: user_id,
        intra: intra_user,
      }),
    });

    let data = await res.json();

    if (data.status !== 200) {
      result.success = false;
      result.message = "Error while adding user!";
      result.intrauser = intra_user;
      result.discorduser = discord_user;
    }

    return result;
  },
};
