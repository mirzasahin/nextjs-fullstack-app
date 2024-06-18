import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Post from "@/models/Post"

export const GET = async (request) => {
    try {
        await connect()
        const posts = await Post.find()
        return new NextResponse(JSON.stringify(posts), { status: 200 }) // "name": "Mirza", "mail": "hi@mirzasahin.com" etc..   (JSON.stringify looks like this)
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}