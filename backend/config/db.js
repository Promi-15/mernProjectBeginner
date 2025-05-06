import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        const mongo = await mongoose.connect(process.env.MONGO_URL)
        console.log(" mongo connected")
    } catch (error) {
        console.log(`mongo is not connected: ${error.message}`)
        process.exit(1); //1 means exit with failure 0 means success
    } 
}