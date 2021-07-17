import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout/layout'
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: blue,
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    )
}
export default MyApp
