import { body } from 'express-validator'

export const productValidation = [
    body('title').isLength({ min: 3 }),
    body('price').isDecimal(),
    body('rating').optional(),
    body('img').isArray().isLength(3),
]

export const typeValidation = [
    body('name').isLength({ min: 3 }),
]

export const productInfoValidation = [
    body('title').isLength({ min: 3 }),
    body('description').isLength({ min: 3 }),
]