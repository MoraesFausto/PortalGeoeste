import React, {useContext} from "react";
import { Container } from "./style";
import Switch  from "react-switch";
import { ThemeContext } from "styled-components"; 
import {shade} from "polished"
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";


const Header: React.FC = () =>{
    const {colors, title} = useContext(ThemeContext);
    return(
        <Container>
            Portal Geoeste
        </Container>
    );
};

export default Header;