import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './use-auth';
import { useRouter } from "./use-router.js";

export default function PrivateRoute({ component: RouteComponent, ...restProps }) {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.user === false){
          router.push('/sabotage');
        }
      }, [auth, router]);
      
    return (
        <Route {...restProps}
            render={routeProps =>
                !!auth.user
                    ? (<RouteComponent {...routeProps} />)
                    : (<Redirect to={'/'} />)
            }
        />
    );
};
