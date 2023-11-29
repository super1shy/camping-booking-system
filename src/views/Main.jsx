const React = require('react');

module.exports = function Main({ title }) {
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
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"
          rel="stylesheet"
        />
        <script defer src="/js/application.js" />
        <title>{title}</title>
      </head>
      <body>
        <header>
          <div className="container-fluid header-container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/places" className="nav-link">
                  Travel
                </a>
              </li>
            </ul>

            <a className="brand-name" href="#">
              NAME
            </a>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link">
                  Sing In
                </a>
              </li>
              <li className="nav-item">
                <a href="/register" className="nav-link btn sign-up-btn">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="bg-image explore-container">
          <div className="row row-glamping">EXPLORE GLAMPING WITH US</div>
          <div className="row row-season">SEASON 2022/2023</div>
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
