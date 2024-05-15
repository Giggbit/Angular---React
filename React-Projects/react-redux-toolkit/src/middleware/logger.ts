/* eslint-disable @typescript-eslint/no-explicit-any */
export const loggerMiddleware =
  (store: any) => (next: any) => (action: any) => {
    console.group("Action:", action.type);
    console.log("State:", store.getState());
    console.log("Payload:", action.payload);
    const result = next(action);
    console.log("New State:", store.getState());
    console.groupEnd();
    return result;
  };