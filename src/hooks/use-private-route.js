import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';
import { useRouter } from "./use-router.js";

import { auth } from '../services/firebase';
import { signIn, signOut } from '../features/userSlice';
import { selectUser } from '../features/userSlice';

export default function PrivateRoute({ component: RouteComponent, ...restProps }) {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const router = useRouter();


    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
          if(authUser) {
                dispatch(
                    signIn({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName,
                }))
                router.push('/');
          } else {
            dispatch(signOut())
            router.push('/sabotage');
          }
        })
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
      
    return (
        <Route {...restProps}
            render={routeProps =>
                !!user
                    ? (<RouteComponent {...routeProps} />)
                    : (<Redirect to={'/'} />)
            }
        />
    );
};
