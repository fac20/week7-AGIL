//we don't need this, keeping it for next week :) 

function layout(content) {
    return /*html*/ //not sure what this does ?
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Holiday!</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/new-post">Write new post</a>
            <a href="/posts">All posts</a>
            <a href="/posts">Logout</a>
          </nav>
        </header>
        ${content}
      </body>
    </html>
  `;
}
