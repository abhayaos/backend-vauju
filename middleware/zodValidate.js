import {ZodError} from "zod"

export const validate =  (schema, property = "body")=>(req, res, next) => {
  try {
    schema.parse(req[property]);
    next();
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({ message: "Validation error", errors: err.errors });
    }
    console.error("Validation middleware error:", err);
    res.status(500).json({ message: "Server error" });
  }
}