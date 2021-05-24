import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "../views/Shop";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Shop}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes