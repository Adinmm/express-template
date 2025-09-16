import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";

export const appMiddleware =(models: ZodType<any>) => (req: Request, res: Response, next: NextFunction) => {
    const result = models.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        status_code: 400,
        message: "Invalid request payload.",
        errors: result.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    req.body = result.data;
    next();
  };
