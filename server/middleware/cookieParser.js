const parseCookies = (req, res, next) => {
  const cookieArr = req.headers.cookie.split('; ');
  for (let i = 0; i < cookieArr.length; i++) {
    const cookieProp = cookieArr[i].split('=');
    const cookieKey = cookieProp[0];
    const cookieVal = cookieProp[1];
    console.log('inside parseCookies, cookieVal=', cookieVal);
    req.cookies[cookieKey] = cookieVal;
    console.log('inside parseCookies, req.cookies[cookieKey]=', req.cookies[cookieKey]);
  }
  next();
};

module.exports = parseCookies;