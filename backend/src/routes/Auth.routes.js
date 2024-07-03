import { Router } from 'express';
import AuthController from '../controllers/Auth.controller.js';
import AuthMiddleware from '../middleware/Auth.middleware.js';

export default class AuthRoutes {
  #router;
  #controller;
  #routeStartPoint = "/auth";

  constructor() {
    this.#router = new Router();
    this.#controller = new AuthController();
    this.#initialiseRoutes();
  }

  #initialiseRoutes = () => {
    this.#router.post("/register", this.#controller.register);
    this.#router.post("/login", this.#controller.login);
  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };
}