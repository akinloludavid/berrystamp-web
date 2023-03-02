export const isNavActive = (str: string) => {
  return window.location.pathname === str;
};

export const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};
export const setLocalStorage = (key: string, body: any) => {
  localStorage.setItem(key, JSON.stringify(body));
};

export const handleLogout = () => {
  localStorage.removeItem(BERRY_STAMP_USERKEY);
  window.location.href = "/";
};
export const BERRY_STAMP_USERKEY = "berry-user";
export const getFilteredObjects = (
  arr: Record<string, string>[],
  query: string
) => {
  return arr?.filter((row: any) => {
    return Object.values(row).some((el) =>
      String(el).toLowerCase().includes(query.toLowerCase())
    );
  });
};
