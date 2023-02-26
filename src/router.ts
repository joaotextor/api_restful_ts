import {Router, Request, Response} from "express"
import { createMovie, getMovieById, getAllMovies, removeMovie} from "./controllers/movieControllers"

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