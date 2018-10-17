import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'

type RenderHTML = (
  ReactComponent: React.ComponentType,
  /** options
   * - minify - Remove spaces and \n
   */
  options?: Partial<{
    minify: boolean
  }>,
) => string

const renderHTML: RenderHTML = (ReactComponent, opts = {}) => {
  const sheet = new ServerStyleSheet()

  const html = renderToStaticMarkup(sheet.collectStyles(<ReactComponent />))

  const markup = /* html */ `<!doctype html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="cache-control" content="no-cache">
        <meta http-equiv="expires" content="0">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href='//fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' />
        <link href='//fonts.googleapis.com/css?family=Roboto:400,300,300italic,500,400italic,500italic' rel='stylesheet' />
        <link href='//unpkg.com/ress@1.2.2/dist/ress.min.css' rel='stylesheet' />
        <link href='https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css' rel='stylesheet' />
        ${sheet.getStyleTags()}
        <title>Erin's Profile</title>
      </head>
      <body>
        <div id="app">${html}</div>

<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-88228991-1', 'auto');
  ga('send', 'pageview');
</script>
      </body>
  `

  if (opts.minify) {
    return markup.replace(/(^\s+|\n)/gm, '')
  }

  return markup
}

export default renderHTML
