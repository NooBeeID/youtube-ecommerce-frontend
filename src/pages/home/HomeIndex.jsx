import { Route, Switch, useRouteMatch } from "react-router-dom";
import Layout from "../../components/Layout";
import Home from "./Home";



export default function HomeIndex(){
    let {path, url} = useRouteMatch();
    return (
        <>
            <Layout>
                <Switch>
                    {console.log(path, url)}
                    <Route path={url+"/"} exact>
                        <Home/>
                    </Route>
                    <Route path={url+"/search"}>
                        <h1>Search</h1>
                    </Route>
                </Switch>
            </Layout>
        </>
    )
}