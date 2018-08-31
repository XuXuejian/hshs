import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  // static async getInitialProps (ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render () {
    return (
      <html lang='en'>
        <Head>
          <title>hi</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link rel='stylesheet' href='https://unpkg.com/normalize.css@8.0.0/normalize.css'/>
          <link rel='stylesheet' href='/static/nprogress.css' />
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
