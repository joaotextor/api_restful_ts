import {Router, Request, Response} from "express"
import { createMovie, getMovieById, getAllMovies, removeMovie, updateMovie} from "./controllers/movieControllers"

import {validate} from "./middlewares/handleValidation"
import { movieCreateValidation } from "./middlewares/movieValidation"

const router = Router()

export default router.get('/test', (req: Request, res: Response) => {
    res.status(200).send("API working")
})
.post("/movie", movieCreateValidation(), validate, createMovie)
.get("/movie/:id", getMovieById)
.get("/movies", getAllMovies)
.delete("/movie/:id", removeMovie)
.patch("/movie/:id", movieCreateValidation(), validate, updateMovie) //Patch permite atualizar apenas uma entrada, sem tornar vazias aquelas não repassadas. No update, se passar apenas um dado para atualizar, os demais ficarão em branco.
