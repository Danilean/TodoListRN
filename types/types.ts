import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  AddTask: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;
export type AddTaskScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AddTask"
>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
export type AddTaskScreenRouteProp = RouteProp<RootStackParamList, "AddTask">;
