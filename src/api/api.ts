import { http } from "@/utils/http";

export const getCaptcha = () => {
  return http.get("/dev/api/user/captcha");
};

export const postLogin = data => {
  return http.request("post", "/dev/api/user/login", { data });
};

/**
 *部门管理列表
 * @returns
 */
export const getDeptList = () => {
  return http.request("get", "/dev/api/dept");
};

/**
 * 根据部门id删除部门信息
 * @param id 部门id
 * @returns
 */
export const deleteDept = id => {
  return http.request("delete", `/dev/api/dept/${id}`);
};

/**
 * 新增部门信息
 * @param dept
 * @returns
 */
export const postDept = dept => {
  return http.request("post", `/dev/api/dept`, { data: dept });
};

/**
 * 修改部门信息
 * @param dept
 * @returns
 */
export const putDept = (id, dept) => {
  return http.request("put", `/dev/api/dept/${id}`, { data: dept });
};
