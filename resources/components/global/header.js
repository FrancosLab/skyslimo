import Head from 'next/head'

export default ({title}) => {
  return (
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <style dangerouslySetInnerHTML={globalStyles()}>
        </style>
      </Head>
  )
}

const globalStyles = () => ({
  __html: `
    html {
        font-family: sans-serif;
        line-height: 1.15;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%
    }
    body {
        margin: 0
    }
    article,
    aside,
    footer,
    header,
    nav,
    section {
        display: block
    }
    h1 {
        font-size: 2em;
        margin: 0.67em 0
    }
    figcaption,
    figure,
    main {
        display: block
    }
    figure {
        margin: 1em 40px
    }
    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible
    }
    pre {
        font-family: monospace, monospace;
        font-size: 1em
    }
    a {
        background-color: transparent;
        -webkit-text-decoration-skip: objects
    }
    a:active,
    a:hover {
        outline-width: 0
    }
    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted
    }
    b,
    strong {
        font-weight: inherit
    }
    b,
    strong {
        font-weight: bolder
    }
    code,
    kbd,
    samp {
        font-family: monospace, monospace;
        font-size: 1em
    }
    dfn {
        font-style: italic
    }
    mark {
        background-color: #ff0;
        color: #000
    }
    small {
        font-size: 80%
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline
    }
    sub {
        bottom: -0.25em
    }
    sup {
        top: -0.5em
    }
    audio,
    video {
        display: inline-block
    }
    audio:not([controls]) {
        display: none;
        height: 0
    }
    img {
        border-style: none
    }
    svg:not(:root) {
        overflow: hidden
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: sans-serif;
        font-size: 100%;
        line-height: 1.15;
        margin: 0
    }
    button,
    input {
        overflow: visible
    }
    button,
    select {
        text-transform: none
    }
    button,
    html [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText
    }
    fieldset {
        border: 1px solid #c0c0c0;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em
    }
    legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal
    }
    progress {
        display: inline-block;
        vertical-align: baseline
    }
    textarea {
        overflow: auto
    }
    [type="checkbox"],
    [type="radio"] {
        box-sizing: border-box;
        padding: 0
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto
    }
    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px
    }
    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none
    }
    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit
    }
    details,
    menu {
        display: block
    }
    summary {
        display: list-item
    }
    canvas {
        display: inline-block
    }
    template {
        display: none
    }
    [hidden] {
        display: none
    }
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    html, body {
      height: 100%;
      min-height: 100%;
      max-height: 100%;
    }
    body > div:first-child {
     height: 100%;
    }
    #__next {
      height: 100%;
    }
    #__next > div:first-child {
      height: 100%;
    }
  `
})
