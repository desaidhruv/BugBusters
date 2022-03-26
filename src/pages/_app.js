import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import theme from "../theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: false,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
