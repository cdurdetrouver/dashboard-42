import { redirect } from "@sveltejs/kit";

export async function load({ cookies }) {
  cookies.set("tokenintra", "", {
    path: "/",
    expires: new Date(0),
  });

  cookies.set("userintra", "", {
    path: "/",
    expires: new Date(0),
  });

  throw redirect(302, "/login_intra");
}
