const parseCookies = (req, res, next) => {
  let cookieString = req.get('Cookie') || '';

  parsedCookies = cookieString.split('; ').reduce((cookies, cookie) => {
    if (cookie.length) {
      let index = cookie.indexOf('=');
      let key = cookie.slice(0, index);
      let token = cookie.slice(index + 1);
      cookies[key] = token;
    }
    return cookies;
  }, {});

  req.cookies = parsedCookies;

  if (req.cookies === undefined || JSON.stringify(req.cookies) === '{}') {
    let cookieStr = req.headers.cookie;
    req.cookies = {};
    if (cookieStr !== undefined) {
      let keyValues = cookieStr.split(';');
      for (let pairs of keyValues) {
        let keyValue = pairs.split('=');
        req.cookies[keyValue[0].trim()] = keyValue[1];
      }
    }
  }
  next();
};

module.exports = parseCookies;
