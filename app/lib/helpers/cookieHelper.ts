/* eslint-disable import/prefer-default-export */
// import * as cookieManager from 'cookie';

export async function parseCookies(req: any, doc?: any) {
  let cookie = req ? req.cookies || '' : '';

  if (!cookie && typeof window !== 'undefined') cookie = document ? document.cookie : doc?.cookie;
  return cookie;
  // try {
  //   return cookieManager.parse(cookie);
  // } catch (ex) {
  //   console.log(JSON.stringify(ex));
  //   return cookie;
  // }
}
