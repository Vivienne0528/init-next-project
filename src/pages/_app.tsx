import { store } from "@/store/store";
import "@/styles/globals.css";
import { Provider as ChakraProvider } from "@/components/ui/provider";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  );
}
