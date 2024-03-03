import { authmdp } from "$lib/env";

export const load = async ({ params, fetch, parent }) => {
  const dataparent = await parent();
  const { id } = params;

  const fetchResponse = async () => {
    const res = await fetch(`/api/${id}/users`, {
      headers: {
        Authorization: authmdp,
      },
    }).catch((err) => {
      console.error(err);
      return null;
    });

    const data = await res?.json();

    // console.log(data.users);

    let newusers: any[] = [];
    data.users.forEach((user: any) => {
      const objectWithId = dataparent.discordusers.find(
        (item: any) => item.id === user.discord_id
      );
      newusers.push({
        username: objectWithId?.username || "NONE",
        id: user._id,
        intra: user.intra,
        projectname: user.projectname,
      });
    });

    return newusers;
  };

  return {
    users: await fetchResponse(),
  };
};

export const actions = {
  default: async ({ request, fetch, params }) => {
    console.log("default");
  },
};
