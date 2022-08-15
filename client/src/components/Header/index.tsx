import React, {useContext} from "react";
import { Container } from "./style";
import Switch  from "react-switch";
import { ThemeContext } from "styled-components"; 
import {shade} from "polished"
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

interface Props {
    toggleTheme(): void; 
}

const Header: React.FC<Props> = ({toggleTheme}) =>{
    const {colors, title} = useContext(ThemeContext);
    return(
        <Container>
            Portal Geoeste

            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={18}
                offColor={shade(.15, colors.primary)}
                onColor={colors.secondary}
            />

        </Container>
    );
};

export default Header;