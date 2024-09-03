import express, { Request, Response } from 'express';
import { validateTranslateRequest } from './middleware/validationMiddleware';
import { translateWordsInBatch } from './services/translationService';
import { TranslateRequestBody, TranslateResponseBody } from './types';

const app = express();
app.use(express.json());

app.post('/translate', validateTranslateRequest, async (req: Request, res: Response) => {
  const { words, targetLanguage } = req.body as TranslateRequestBody;

  try {
    const translatedWords = await translateWordsInBatch(words, targetLanguage);
    const response: TranslateResponseBody = {
      words: translatedWords,
      targetLanguage,
    };
    res.json(response);
  } catch (error) {
    console.error('Error in translation endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Translation service is running on http://localhost:${PORT}`);
});
