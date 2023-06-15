import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 3,
    handler: (req, res) => {
        res.status(429).json({
            message: 'Too many requests!'
        });
    }
});