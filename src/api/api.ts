import { http } from "@/utils/http";

export const getCaptcha = () => {
  return http.get("/dev/api/user/captcha");
};

export const postLogin = data => {
  return http.request("post", "/dev/api/user/login", { data });
};
