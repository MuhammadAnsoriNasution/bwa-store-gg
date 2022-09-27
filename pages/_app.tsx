import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/404-not-found.css'
import '../styles/checkout.css'
import '../styles/complete-checkout.css'
import '../styles/detail.css'
import '../styles/edit-profile.css'
import '../styles/homepage.css'
import '../styles/navbar-log-in.css'
import '../styles/overview.css'
import '../styles/sidebar.css'
import '../styles/sign-in.css'
import '../styles/sign-up-photo.css'
import '../styles/sign-up-success.css'
import '../styles/sign-up.css'
import '../styles/transactions.css'
import '../styles/utilities.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <>

    <Component {...pageProps} />
    <ToastContainer />
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    {/* <!-- Bootstrap --> */}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossOrigin="anonymous">
    </script>
  </>

}

export default MyApp
