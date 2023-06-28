import { Response } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type controllerResponse = Promise<Response<any, Record<string, any>>>;
