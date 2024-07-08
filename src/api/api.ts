import { http } from "@/utils/http";

export const getCaptcha = () => {
  return http.get("/api/user/captcha");
};

export const postLogin = data => {
  return http.request("post", "/api/user/login", { data });
};
