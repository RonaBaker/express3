import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    const input = res.locals.validationError;
    if (input === 'wrong_id' || input === 'wrong_name') {
      res.status(400).send(err.message);
    } else if (input === 'not_found') {
      res.status(404).send(err.message);
    } else {
      next(err);
    }
}
