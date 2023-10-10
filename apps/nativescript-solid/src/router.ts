import { createStackRouter, RouteDefinition } from "solid-navigation";
import { DataType } from "@vision/nativescript-data";

declare module "solid-navigation" {
  export interface Routers {
    Default: {
      Home: RouteDefinition;
      Detail: RouteDefinition<{ id?: DataType }>;
    };
  }
}

export const { Route, StackRouter, useParams, useRouter } =
  createStackRouter<"Default">();
