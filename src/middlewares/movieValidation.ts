// Equivalente ao req.body, mas possui métodos de validação
import {body} from "express-validator"


export const movieCreateValidation = () => {
    return [
        body("title")
            .isString()
            .withMessage("O título é obrigatório.")
            .isLength({min: 2})
            .withMessage("O título precisa ter no mínimo 2 caracteres."),

        body("rating")
            .isNumeric()
            .withMessage("A nota precisa ser numérica.")
            .custom((value: number) => {
                if (value < 0 || value > 10) {
                    throw new Error("A nota precisa ser entre 0 e 10.")
                }
                return true
            }),
        
        body("description")
            .isString()
            .withMessage("A descrição é obrigatória.")
            .isLength({min: 50})
            .withMessage("A descrição deve ter no mínimo 50 caracteres"),

        body("director")
            .isString()
            .withMessage("O nome do diretor é obrigatório"),

        body("poster")
            .isURL()
            .withMessage("A imagem precisa ser uma URL")
    ]
}