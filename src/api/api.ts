import { http } from "@/utils/http";

export const getCaptcha = () => {
  return http.get("/dev/apis/token/captcha");
};

export const postLogin = data => {
  return http.request("post", "/dev/apis/token/login", { data });
};

/**
 *部门管理列表
 * @returns
 */
export const getDeptList = () => {
  return http.request("get", "/dev/apis/dept");
};

/**
 * 根据部门id删除部门信息
 * @param id 部门id
 * @returns
 */
export const deleteDept = id => {
  return http.request("delete", `/dev/apis/dept/${id}`);
};

/**
 * 新增部门信息
 * @param dept
 * @returns
 */
export const postDept = dept => {
  return http.request("post", `/dev/apis/dept`, { data: dept });
};

/**
 * 修改部门信息
 * @param dept
 * @returns
 */
export const putDept = (id, dept) => {
  return http.request("put", `/dev/apis/dept/${id}`, { data: dept });
};

/**
 *角色管理列表
 * @returns
 */
export const getRoleList = data => {
  return http.request("get", "/dev/apis/role", data);
};

/**
 * 新增角色信息
 * @param data
 * @returns
 */
export const postRole = data => {
  return http.request("post", "/dev/apis/role", { data });
};

/**
 * 修改角色信息
 * @param data
 * @returns
 */
export const putRole = (id, data) => {
  return http.request("put", `/dev/apis/role/${id}`, { data });
};

/**
 * 删除角色信息
 * @param data
 * @returns
 */
export const deleteRole = id => {
  return http.request("delete", `/dev/apis/role/${id}`);
};

/**
 *菜单管理列表
 * @returns
 */
export const getMenuList = () => {
  return http.request("get", "/dev/apis/menu");
};

/**
 * 新增菜单信息
 * @param data
 * @returns
 */
export const postMenu = data => {
  return http.request("post", "/dev/apis/menu", { data });
};

/**
 * 修改菜单信息
 * @param data
 * @returns
 */
export const putMenu = (id, data) => {
  return http.request("put", `/dev/apis/menu/${id}`, { data });
};

/**
 * 删除菜单信息
 * @param data
 * @returns
 */
export const deleteMenu = id => {
  return http.request("delete", `/dev/apis/menu/${id}`);
};

/**
 *当前角色下权限管理列表
 * @returns
 */
export const getPermissionList = roleId => {
  return http.request("get", `/dev/apis/permission/${roleId}`);
};

/**
 * 根据角色Id保存权限列表
 * @param roleId
 * @param permissionList
 * @returns
 */
export const postPermissionList = (roleId, permissionList) => {
  return http.request("post", `/dev/apis/permission/${roleId}`, {
    data: permissionList
  });
};
