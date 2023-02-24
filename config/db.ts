import mongoose from "mongoose"
import config from "config"
import Logger from "./logger"

export default async function connect() {

    const dbUri = config.get<string>('dbUri')

    try {
        await mongoose.connect(dbUri)
        Logger.info("Conectado ao banco de dados")

    } catch (e) {
        Logger.error("Não foi possível conectar")
        Logger.error(e)
        process.exit(1)
    }

}