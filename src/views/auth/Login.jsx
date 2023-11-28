const React = require('react');

module.exports = function Login({ error }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/registration.css" />
        <link rel="stylesheet" href="/css/login.css" />
        <title>Sign In</title>
      </head>
      <body>
        <div className="sign-up-container">
          <div className="circle-div" />

          <div className="sign-up-div">Sign In</div>
          <div>
            Don't have an accout? <a href="/register">Sign Up</a>
          </div>

          <div className="btn-group-via-socials">
            <button className="google-btn">
              <span>
                <img src="/img/facebook.svg" alt="" />
                Sign up with Facebook
              </span>
            </button>
            <button className="facebook-btn">
              <span>
                <img src="/img/google.svg" alt="" />
                Sign up with Google
              </span>
            </button>
          </div>

          <div className="line-container">
            <hr />
            OR
            <hr />
          </div>

          <form
            className="needs-validation"
            noValidate=""
            method="POST"
            action="/login"
          >
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="1234"
                  required=""
                />
                <div className="invalid-feedback">
                  Please enter your password
                </div>
              </div>
            </div>
            <br />
            {error ? <div style={{ color: 'red' }}>{error}</div> : null}
            <br />
            <button
              className="w-100 btn btn-primary btn-lg submit-btn"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
};
