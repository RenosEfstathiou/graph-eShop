import { AppDispatch, RootState } from "../app/store";

export enum APIStatuses {
  Idle = "idle",
  Pending = "pending",
  Fulfilled = "fulfilled",
  Rejected = "rejected",
}

export const GENERAL_ERROR_MESSAGE = "Something went wrong.";

export interface IFetchError {
  message: string | typeof GENERAL_ERROR_MESSAGE;
}

export interface IThunk {
  state: RootState;
  rejectValue: IFetchError;
  dispatch?: AppDispatch;
}
