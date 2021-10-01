import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom"
import Home from "./page/Home";
import ProductDetails from "./page/ProductDetails";

function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/products/:id">
                    <ProductDetails />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes