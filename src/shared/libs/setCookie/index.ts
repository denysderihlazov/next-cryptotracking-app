const set = (name: string, value: string, expires?: number) => {
  const date = new Date();

  // Set it expire in 7 days by default
  date.setTime(expires || (date.getTime() + (7 * 24 * 60 * 60 * 1000)));

  document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}

export const cookies = {
   set,
}