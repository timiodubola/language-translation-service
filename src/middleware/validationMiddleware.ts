import { body } from 'express-validator';

export const validateTranslateRequest = [
  body('words')
    .isArray().withMessage('Words must be an array')
    .bail()
    .custom((value: any) => value.every((word: any) => typeof word === 'string'))
    .withMessage('Each word must be a string'),
  body('targetLanguage')
    .isString().withMessage('Target language must be a string')
];
