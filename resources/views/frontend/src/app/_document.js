import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/assets/images/fav.png" type="image/png"/>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>
        <link rel="stylesheet" href="/assets/plugins/testimonial/css/owl.carousel.min.css"/>
        <link rel="stylesheet" href="/assets/plugins/testimonial/css/owl.theme.min.css"/>
        <link rel="stylesheet" href="/assets/css/style.css"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/assets/js/jquery-3.2.1.min.js"></script>
        <script src="/assets/js/popper.min.js"></script>
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/plugins/scroll-fixed/jquery-scrolltofixed-min.js"></script>
        <script src="/assets/plugins/testimonial/js/owl.carousel.min.js"></script>
        <script src="/assets/js/typewrite.min.js"></script>
        <script src="/assets/js/script.js"></script>
      </body>
    </Html>
  );
}
