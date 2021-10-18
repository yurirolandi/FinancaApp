const { parse } = JSON;

const getStorage = (key, { format } = {}) => {
  const value = localStorage.getItem(key);
  return format ? parse(localStorage.getItem(key)) : value;
};

export { getStorage };
