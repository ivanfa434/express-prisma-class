import { Router } from "express";
import { injectable } from "tsyringe";
import { SampleController } from "./sample.controller";

@injectable()
export class SampleRouter {
  private router: Router;
  private sampleController: SampleController;

  constructor(SampleController: SampleController) {
    this.router = Router();
    this.sampleController = SampleController;
    this.initializeRoutes();
  }

  private initializeRoutes = () => {
    this.router.get("/", this.sampleController.getSamples);
    this.router.get("/:id", this.sampleController.getSample);
    this.router.post("/", this.sampleController.createSample);
    this.router.patch("/:id", this.sampleController.updateSample);
    this.router.delete("/:id", this.sampleController.deleteSample);
  };

  getRouter() {
    return this.router;
  }
}