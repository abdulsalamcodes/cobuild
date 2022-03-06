import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export enum Actions {
  UPDATE_STATE= 'UPDATE_STATE',
}

export interface State {
  initializing: boolean;
  user: FirebaseAuthTypes.User | null;
  loading: boolean;
}

export interface AuthAction {
  type: Actions;
  payload: any;
} 

export const initialState: State = {
  initializing: true,
  user: null,
  loading: false,
};

export const AuthContextReducer = (state: State | undefined, action: AuthAction): State => {
  switch (action.type) {
    case Actions.UPDATE_STATE:
      return {
        ...state,
        ...action.payload,
      }
    default:
      throw new Error(`Unhandlded action type ${action.type}`);
  }
}