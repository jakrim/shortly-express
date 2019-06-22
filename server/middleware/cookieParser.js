const parseCookies = (req, res, next) => {
  if (req.cookies === undefined || JSON.stringify(req.cookies) === "{}") {
    let cookieStr = req.headers.cookie;
    req.cookies = {};
    if (cookieStr !== undefined) {
      let keyValues = cookieStr.split(";");
      for (let pairs of keyValues) {
        let keyValue = pairs.split("=");
        req.cookies[keyValue[0].trim()] = keyValue[1];
      }
    }
  }
  next();
};

module.exports = parseCookies;
