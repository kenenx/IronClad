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
    this.#router.delete("/", this.#controller.deleteTemplate);
    this.#router.get("/:id", this.#controller.getTemplate);
    this.#router.get("/", this.#controller.getTemplates);

  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };


}
