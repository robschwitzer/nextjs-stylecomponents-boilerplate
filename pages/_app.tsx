import type { AppProps } from 'next/app'
import { withLayout } from "lib/HOC/withLayout";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default withLayout(App);
