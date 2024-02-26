import { Box } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Head from "next/head";
import useSWR from "swr"
import Cards from "../components/House/Cards"


export default function Home() {
  const {data:houses} = useSWR(`/api/house/getAll`)

  console.log(houses);
  return (
    <>
      <Box>
        <Head>
          <title>Airbnb</title>

        </Head>
        <Navbar/>
        <Cards/>
      </Box>
    </>
  )
}
