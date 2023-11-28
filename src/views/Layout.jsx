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
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/homepage.css" />
        <script defer src="/js/application.js" />
        <title>{title}</title>
      </head>
      <body>
        <header>
          <div class="container header-container">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="" class="nav-link">
                  Travel
                </a>
              </li>
            </ul>

            <a class="brand-name" href="#">
              NAME
            </a>

            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="" class="nav-link">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a href="/places/favourites" class="nav-link">
                  Favourites
                </a>
              </li>
              <hr />
              <li class="nav-item">
                <a href="/logout" class="nav-link btn sign-up-btn">
                  {user ? user.username : null}
                </a>
              </li>
            </ul>
          </div>
        </header>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
  );
};
