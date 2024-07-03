import { Router } from "express";
import TemplateController from "../controllers/Template.controller.js";
import AuthMiddleware from "../middleware/Auth.middleware.js";

export default class TemplateRoutes {
  #router;
  #controller;
  #routeStartPoint = "/template";
  #authMiddleware;

  constructor() {
    this.#router = new Router();
    this.#controller = new TemplateController();
    this.#authMiddleware = new AuthMiddleware();
    this.#initialiseRoutes();
  }

  #initialiseRoutes = () => {
    this.#router.post("/", this.#controller.createTemplate);
    // this.#router.post("/", this.#authMiddleware.verify, this.#controller.createTemplate);
    this.#router.put("/", this.#controller.updateTemplate);
  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };


}
