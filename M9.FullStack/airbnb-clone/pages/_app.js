import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import { SWRConfig} from 'swr'
import { SessionProvider} from "next-auth/react";

export default function App({ Component, pageProps:{ session, ...pageProps} }) {
  return(  
  <ChakraProvider>
    <SessionProvider session={session}>
      <SWRConfig value={{
        fetcher: (...args) => fetch(...args).then((res) => res.json())
        }}>
    <Navbar> 
    <Component {...pageProps} />
    </Navbar>
    </SWRConfig>
    </SessionProvider>
  </ChakraProvider>
  
  )
}
