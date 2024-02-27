import axios from "axios";

export async function load({ cookies, url }) {
  let code = url.searchParams.get("code");
  if (code) {
    let token = await getToken(code);

    if (token) {
      const access_token = token.access_token;

      const user = await axios.get(`${API_ENDPOINT}/users/@me`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      // console.log("user", user.data);
      cookies.set("user", JSON.stringify(user.data), {
        path: "/",
      });

      return {
        user: user.data,
        connexion: true,
      };
    }
  }
  return { connexion: false };
}

const API_ENDPOINT = "https://discord.com/api/v10";
const CLIENT_ID = "1208567625337151488";
const CLIENT_SECRET = "E6fH_4MG7D7zEu7STdFilrsItIB17MbC";

async function getToken(code: string) {
  const data = new URLSearchParams({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: "http://localhost:5173/login",
  });

  const response = await axios
    .post(`${API_ENDPOINT}/oauth2/token`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      },
    })
    .catch((error) => {
      console.error(error);
      return null;
    });

  // console.log("response", response ? response.data : null);
  return response ? response.data : null;
}
