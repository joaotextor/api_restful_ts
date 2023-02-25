import {Request, Response} from "express"

import {MovieModel} from "../models/Movie"

import Logger from "../../config/logger"

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
    } catch (error: any) {
        Logger.error(`Erro no sistema: ${error.message}`)        
    }
}

export async function getMovieById(req: Request, res: Response) {
    try {

        const id = req.params.id
        const movie = await MovieModel.findById(id)

        if (!movie) {
            return res.status(404).json({error: "O filme não existe"})
        }

        return res.status(200).json(movie)
        
    } catch (error: any) {
        Logger.error(`Erro no sistema: ${error.message}`)
    }
}

export async function getAllMovies(req: Request, res: Response) {
    try {

        const movies: object[] = await MovieModel.find()

        if (!movies) {
            return res.status(404).json({error: "Nenhum filme encontrado"})
        }
        
        return res.status(200).json(movies)
        
    } catch (error: any) {
        Logger.error(`Erro no sistema: ${error.message}`)
    }
}