import 'nprogress/nprogress.css';
import 'utils/global.css';
import NProgress from 'nprogress';
import {
  AppProps,
  ErrorComponent,
  useRouter,
  AuthenticationError,
  AuthorizationError,
  Router,
  ErrorBoundary,
  FallbackProps,
} from 'blitz';
import { Box, ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { theme } from 'theme';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme} resetCSS>
        <ColorModeProvider
          value="dark"
          options={{
            initialColorMode: 'dark',
            useSystemColorMode: false,
          }}
        >
          <ErrorBoundary
            FallbackComponent={RootErrorFallback}
            resetKeys={[router.asPath]}
          >
            {getLayout(<Component {...pageProps} />)}
          </ErrorBoundary>
        </ColorModeProvider>
      </ChakraProvider>
    </RecoilRoot>
  );
}

function RootErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  if (error instanceof AuthenticationError) {
    return <Box />;
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={(error as any).statusCode}
        title="Sorry, you are not authorized to access this"
      />
    );
  } else {
    return (
      <ErrorComponent
        statusCode={(error as any)?.statusCode || 400}
        title={error?.message || error?.name}
      />
    );
  }
}

export default App;
