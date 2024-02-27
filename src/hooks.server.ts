import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  let token = event.cookies.get("token");
  let user = event.cookies.get("user");

  if (event.url.pathname.startsWith("/dashboard")) {
    if (!token) return redirect(302, "/login");
  }

  if (token) {
    if (user) {
      const user2 = JSON.parse(user);
      event.locals.user = {
        id: user2.id,
        username: user2.username,
        avatar: user2.avatar,
      };
      // console.log(event.locals.user);
    } else {
      event.cookies.set("token", "", {
        path: "/",
        expires: new Date(0),
      });
    }
  }

  let response = await resolve(event);
  return response;
};
