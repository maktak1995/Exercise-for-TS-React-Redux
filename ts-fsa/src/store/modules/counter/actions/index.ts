import actionCreaterFactory from "typescript-fsa";
const actionCreater = actionCreaterFactory("counter");

export const increment = actionCreater("INCREMENT");
export const decrement = actionCreater("DECREMENT");

export type AddPyload = number;
export const add = actionCreater<AddPyload>("ADD");