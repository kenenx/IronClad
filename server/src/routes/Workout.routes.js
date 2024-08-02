import { Router } from 'express';
import WorkoutController from '../controllers/Workout.controller.js';
import AuthMiddleware from '../middleware/Auth.middleware.js';

export default class WorkoutRoutes {
  #router;
  #controller;
  #routeStartPoint = "/workout";
  #authMiddleware;

  constructor() {
    this.#router = new Router();
    this.#controller = new WorkoutController();
    this.#authMiddleware = new AuthMiddleware();
    this.#initialiseRoutes();
  }

  #initialiseRoutes = () => {
    this.#router.post("/", this.#controller.createWorkout);
    this.#router.put("/", this.#controller.updateWorkout);
    this.#router.delete("/", this.#controller.deleteWorkout);
    this.#router.get("/:id", this.#controller.getWorkout);
    this.#router.get("/user/:id", this.#controller.getUserWorkouts);

  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };

}