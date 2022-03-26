import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import theme from "../theme";
import GetDataContext from "../context/Data";
import React, { useState } from "react";
import {
  contractorSignUp,
  projectDetails,
  workerDetails,
} from "../../data/contractor";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [alldata, setcontractor] = useState({
    contractorSignUp,
    projectDetails,
    workerDetails,
  });
  console.log("from dump", alldata);
  return (
    <GetDataContext.Provider value={{ data: alldata }}>
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
    </GetDataContext.Provider>
  );
}

export default MyApp;
