import dbConnect from "utils/db";
import mongoose from "mongoose";
import House from "models/HouseModel";
import { getSession } from "next-auth/react";

export default async function addHouse(req, res){
    await dbConnect;

    const session = await getSession([req]);

    try{
        const body = req.body
        console.log(body);
        const result = await new House({
            price: body?.price,
            description: body?.description,
            address: body?.address,
            country: body?.country,
        }).save()
        res.json(result)
    } catch (error){
        res.json({
            status: "Error",
            message: "Something went wrong"
        })
    }
    res.json()
}