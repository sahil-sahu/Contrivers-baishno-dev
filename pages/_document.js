import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" type="image/x-icon" />
          <link rel="canonical" href="https://baishnodevibuilder.com/" /> 
          <meta charset="utf-8" />
          <meta name="keywords" content="Baishnodevi Engineers and Consultancy, Baishnodevi Engineers and Consultancy Pvt. Ltd., Sri Bhulaxmi Infratech LLP, Best Luxury Apartments, Flats For Sale In Bhubaneswar, 2BHK Flats, 3BHK Flats, 4BHK Flats, best builder in Bhubaneswar, builder in Bhubaneswar, real estate firms in Bhubaneswar, Landscape Design Bhubaneswar, best architecture in Bhubaneswar, best architecture near me, interior architecture, bathroom, kitchen design, modern home, furniture, home design, interiors, interior designer, architecture, design, interior design, art, interior, architecture lovers, architect, home, home decor, archilovers, Arquitectura, building, construction, decor, home design, luxury, interiors, Bhubaneshwar, Bhubaneswar, bbsr, BEC, bec Bhubaneswar, Odisha, India ."></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument