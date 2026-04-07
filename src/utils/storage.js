export function getStoredValue(key, fallback = '') {
  try {
    const value = window.localStorage.getItem(key);
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

export function setStoredValue(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return null;
  }

  return value;
}