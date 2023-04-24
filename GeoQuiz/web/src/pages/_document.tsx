import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html dir="ltr" lang="pt-br">
        <Head>
          {/* Primary Meta Tags*/}
          <meta charSet="utf-8" />
          <meta content="text/html" httpEquiv="content-type" />

          {/* SEO Meta Tags*/}
          <meta content="OPTIMUS Jr. Controle e Automação" name="author" />
          <meta
            content="Empresa júnior de automação residencial, oferecemos soluções inovadoras e personalizadas para tornar sua casa mais inteligente."
            name="description"
          />

          {/* Open Graph / Facebook*/}
          <meta content="website" property="og:type" />
          <meta content={process.env.SITE_URL} property="og:url" />
          <meta
            content="OPTIMUS Jr. Controle e Automação | Empresa de Automação em Salvador"
            property="og:title"
          />
          <meta content={`${process.env.SITE_URL}/card.png`} property="og:image" />
          <meta
            content="ícone da OPTIMUS Jr. em um fundo branco. O ícone é um circulo verde com uma engrenagem dentro, e dentro da engrenagem um sinal de onda."
            property="og:image:alt"
          />
          <meta content="pt_BR" property="og:locale" />
          <meta
            content="Empresa júnior de automação residencial, oferecemos soluções inovadoras e personalizadas para tornar sua casa mais inteligente."
            property="og:description"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
