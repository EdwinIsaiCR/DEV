import Navbar from "components/Navbar"
import { Box } from "@chakra-ui/react"
import HouseCreate from "components/House/HouseCreate"
import Head from "next/head"

export default function CreateHouse(props){
    return(
        <Box>
            <Head>
                <title>Create</title>
                <meta name="adasd" content="tasd"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <HouseCreate/>
        </Box>
    )
}