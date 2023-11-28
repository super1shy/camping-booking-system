const React = require('react');

module.exports = function Layout({ title, children, user }) {
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
        <link rel="stylesheet" href="/css/homepage.css" />
        <script defer src="/js/application.js" />
        <title>{title}</title>
      </head>
      <body>
        <header>
          <div className="container header-container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link">
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
                <a href="" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="/places/favourites" className="nav-link">
                  Favourites
                </a>
              </li>
              <hr />
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {user ? user.username : null}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      My bookings
                    </a>
                    <a className="dropdown-item" href="#">
                      Support
                    </a>
                    <a className="dropdown-item" href="/logout">
                      Log Out
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </header>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
};
