// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="darkreader-lock" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap"
            rel="stylesheet"
          />
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          <script
            src="https://assets.calendly.com/assets/external/widget.js"
            type="text/javascript"
            async
          ></script>
          {scripts}
        </body>
      </html>
    )}
  />
));
