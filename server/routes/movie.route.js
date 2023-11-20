import express from "express";
import MovieController from "../controller/movie.controller.js";

const MoviesRouter = express.Router();

MoviesRouter.get("/homepage", MovieController.getHomepage);
MoviesRouter.get("/", MovieController.getMovie);
MoviesRouter.post("/", MovieController.addMovie);
MoviesRouter.get("/:id", MovieController.deleteMovie);
MoviesRouter.get("/trending", MovieController.getMovieTrending);
MoviesRouter.get("/continue", MovieController.getMovieContinue);
// MovieRouter.delete('/twits/:id', MovieController.removeTwits)

export default MoviesRouter;
