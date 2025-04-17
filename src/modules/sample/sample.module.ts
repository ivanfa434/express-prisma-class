import { PrismaClient } from "../../generated/prisma";
import { SampleController } from "./sample.controller";
import { SampleService } from "./sample.service";

export const createSampleController = () => {
  const prisma = new PrismaClient();
  const service = new SampleService(prisma);
  const controller = new SampleController(service);
  return controller;
};
