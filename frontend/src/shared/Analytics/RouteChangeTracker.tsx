import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {report} from "./analytics.ts";

function RouteChangeTracker() {
    const location = useLocation();

    useEffect(() => {
        report('route:' + location.pathname)
    }, [location]);

    return null;
}

export default RouteChangeTracker;