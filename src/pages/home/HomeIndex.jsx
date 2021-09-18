import { Route, Switch, useRouteMatch } from "react-router-dom";
import Layout from "../../components/Layout";
import Detail from "./Detail";
import Home from "./Home";



export default function HomeIndex(){
    let {path, url} = useRouteMatch();
    return (
        <>
            <Layout>
                <Switch>
                    <Route path={url+"/"} exact>
                        <Home/>
                    </Route>
                    <Route path={url+"/detail/:id"}>
                        <Detail/>
                    </Route>
                    <Route path={url+"/search"}>
                        <h1>Search</h1>
                    </Route>
                </Switch>
            </Layout>
        </>
    )
}