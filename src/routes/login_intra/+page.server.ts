import { INTRA_ENDPOINT, INTRA_ID, INTRA_SECRET } from "$lib/env";
import { redirect } from "@sveltejs/kit";
import axios from "axios";

export async function load({ cookies, url }) {
  let code = url.searchParams.get("code");

  let userintra = cookies.get("userintra");
  let tokenintra = cookies.get("tokenintra");
  if (userintra && tokenintra) {
    return {
      userintra: JSON.parse(userintra),
      connexion: true,
    };
  }

  if (code) {
    let token = await gettoken(code);

    if (token) {
      let user = await getUser(token);
      const user2 = {
        id: user.id,
        username: user.login,
        avatar: user.image.link,
      };
      cookies.set("userintra", JSON.stringify(user2), {
        path: "/",
        expires: new Date(Date.now() + token.expires_in * 1000),
      });

      cookies.set("tokenintra", JSON.stringify(token.access_token), {
        path: "/",
        expires: new Date(Date.now() + token.expires_in * 1000),
      });

      return redirect(302, "/login_intra");
    }
  }

  return { connexion: false };
}

async function gettoken(code: string) {
  const data = {
    grant_type: "authorization_code",
    client_id: INTRA_ID,
    client_secret: INTRA_SECRET,
    code: code,
    redirect_uri: "http://localhost:5173/login_intra",
  };

  let response = await axios
    .post(`${INTRA_ENDPOINT}/oauth/token`, data)
    .catch((error) => {
      console.log("error", error);
      return null;
    });

  return response?.data;
}

async function getUser(token: any) {
  const response = await axios
    .get(`${INTRA_ENDPOINT}/me`, {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    })
    .catch((e) => {
      return null;
    });

  return response?.data;
}
