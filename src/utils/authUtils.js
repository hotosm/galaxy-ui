import axios from "axios";
import { API_URL } from "../config";

function createPopup(title: string = "Authentication", location: string) {
  const popup = window.open(location, "_blank", "popup");
  if (!popup) return;

  return popup;
}

export const createLoginWindow = (redirectTo) => {
  const popup = createPopup("OSM Auth", "");
  let url = `${API_URL}/auth/login`;
  axios.get(url).then((response) => {
    popup.location = response.data.url;

    window.authComplete = (code) => {
      let callbackUrl = `${API_URL}/auth/callback?code=${code}`;
      axios.get(callbackUrl).then((res) => {
        const params = new URLSearchParams({
          access_token: res.data.access_token,
          redirect_to: redirectTo,
        }).toString();
        let redirectUrl = `/authorised/?${params}`;
        window.location.href = redirectUrl;
      });
    };
  });
};
