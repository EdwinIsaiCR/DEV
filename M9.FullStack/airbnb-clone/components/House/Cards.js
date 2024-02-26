import { Box } from "@chakra-ui/react";
import House from "models/HouseModel";

export default function Cards(props){
    const {data:houses} = useSWR(`/api/house/getAll`)
    console.log(houses);
    return(
        <Box>
            {houses?.map((house) => {
                <House
                country= {house.country}
                price = {house.price}
                address= {house.addres}
                />
            })}
        </Box>
    )
}