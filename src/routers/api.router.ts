import {Router} from "express";
import {PokemonController} from "../controllers/pokemon.controller";
import {apiLimiter} from "../middlewares/rateLimit";

const apiRouter = Router();

apiRouter.use(apiLimiter);

apiRouter.get('/', PokemonController.getPokemon);

export default apiRouter;