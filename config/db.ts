import mongoose from "mongoose"
import config from "config"

export default async function connect() {

    const dbUri = config.get<string>('dbUri')

    try {
        await mongoose.connect(dbUri)
        console.log("Conectado ao banco de dados")

    } catch (e) {
        console.log("Não foi possível conectar")
        console.log(`Erro: ${e}`)
    }

}