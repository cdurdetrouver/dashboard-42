import { redirect, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.user = {
    id: 1,
    username: "lukeed",
    email: "test@gmail.com",
  };

  if (event.url.pathname.startsWith("/dashboard")) {
    if (!event.locals.user) return redirect(302, "/login");
  }

  const response = await resolve(event);
  return response;
};
