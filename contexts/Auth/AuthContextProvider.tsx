import React, { createContext, useReducer, useEffect } from 'react';
import { initialState, AuthContextReducer, State, AuthAction, Actions } from './AuthContextReducer';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useToastContext } from '../ToastContext/ToastContext';
import Toast from 'react-native-toast-message';
interface AuthContextProviderProps {
  children: React.ReactNode;
}

interface AuthContextValue extends State {
  dispatch: React.Dispatch<AuthAction>;
  signInHandler: ({email, password} : {email: string, password: string}) => void;
  signUpHandler: ({email, password, name, username} : {email: string, password: string, name: string, username: string}) => void;
  signOutHandler: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(AuthContextReducer, initialState)
  const { initializing } = state;
  const toastContext = useToastContext();

  const updateState = (payload: Partial<State>) => {
    dispatch({ type: Actions.UPDATE_STATE, payload })
  }

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    console.log('user', user);
    updateState({ user })
    if (initializing) updateState({ initializing: false }); 
    // if (initializing) {
    //   setTimeout(() => {
    //     updateState({ initializing: false });
    //   }, 5000);
    // }
  }


  // const createUserProfile = async () => {
  //   await auth().currentUser?.updateProfile({})
  // }

  const signUpHandler = ({ email, password, name, username } : {email: string, password: string, name: string, username: string}) => {
    updateState({ loading: true });
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('user', user)
        updateState({ loading: false });
      })
      .catch((error) => {
        updateState({ loading: false })
        if (error.code === 'auth/email-already-in-use') {
          toastContext?.showError('That email address is already in use!');
        }

        if (error.code === 'auth/weak-password') {
          toastContext?.showError('Weak password!');
        }
    
        if (error.code === 'auth/invalid-email') {
          toastContext?.showError('That email address is invalid!');
        }

        console.log(error);
      })
  };

  const signInHandler = ({email, password} : {email: string, password: string}) => {
    updateState({ loading: true });
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        updateState({ loading: false });
        console.log('user', user)
      })
      .catch((error) => {
        updateState({ loading: false });
        if (error.code === 'auth/wrong-password') {
          toastContext?.showError('Weak password!');
        }
        
        if (error.code === 'auth/user-not-found') {
          toastContext?.showError('User not found!');
        }

        if (error.code === 'auth/invalid-email') {
          toastContext?.showError('That email address is invalid!');
        }
      })
  };

  const signOutHandler = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!')
      })
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [])

  const value = {
    ...state,
    dispatch,
    signInHandler,
    signOutHandler,
    signUpHandler,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuthContext = (): AuthContextValue | undefined => {
  const context = React.useContext(AuthContext) as AuthContextValue;

  if (!context) {
    console.log('useChat must be used within a AuthContextProvider');
    return undefined;
  }

  return context;
};
