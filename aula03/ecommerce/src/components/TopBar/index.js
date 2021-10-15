import { CartIcon, FancyButton, TopBarContainer } from "./styles";
import { useState } from "react";

function TopBar(props){
    return (
        <TopBarContainer>
            <a>
                <h1>{props.title}</h1>
            </a>
            <FancyButton to="/cart">
                <i><CartIcon /></i>Checkout
            </FancyButton>
         </TopBarContainer>
    )
}
export default TopBar;