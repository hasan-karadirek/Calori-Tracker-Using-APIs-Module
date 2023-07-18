export const getCookies = cName => {
  const cookieArr = decodeURIComponent(document.cookie).split(';');
  for (const cookie of cookieArr) {
    if (cookie.split('=')[0] === cName) {
      return cookie.split('=')[1];
    }
  }
  return null;
};
