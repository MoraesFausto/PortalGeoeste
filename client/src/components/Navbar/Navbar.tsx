import { Link } from 'react-router-dom';
import { logoutUser } from '../../hooks/useAuth';
import {  LogoutButton, Nav, NavItem } from './style';

interface IMenuBurgerProps {
  page?: 'project' | 'resources' | 'home';
  status?: boolean;

}

const NavBar: React.FC<IMenuBurgerProps> = ({ page,  status}) => {

  return (
    <div>
    <Nav>
      <ul>
        <NavItem style={{"marginTop":"3vw"}} active={page === 'resources'} opt={'white'}>
          <Link to="/mapas">Pesquisa</Link>
          <ul className="DropDraw">
            <NavItem opt={'white'}>
                <a href='/categorias/3'> Agropecuária</a>
            </NavItem>              
            <NavItem opt={'white'}>
                <a href='/categorias/1'> Ambiental</a>
              </NavItem>
            <NavItem opt={'white'}>
                <a href='/categorias/2'> Municipal </a>
            </NavItem>
          </ul>
        </NavItem>
        <NavItem active={page === 'home'} opt={'none'}>
          <a href='/'>
              <img style={{"width":"4.4vw", "height":'4.4vw', "marginTop":"-.75vw", "marginLeft":".5vw"}}
                src={require('../../assets/compass_with_p_white.png')}
                onMouseOver={(e)=>{e.currentTarget.src = require('../../assets/compass_with_p_blue.png')}}
                onMouseOut={(e)=>{e.currentTarget.src = require('../../assets/compass_with_p_white.png')}} 
                alt='logo' />
          </a>
        </NavItem>
        <NavItem active={page === 'project'} style={{"marginTop":"3vw"}} opt={'white'}>
          <Link to="/Saiba_mais">Projeto</Link>
        </NavItem>


      </ul>
    </Nav>
    {status ?(
          <p></p>
        )
        :(
          <LogoutButton>
            <button type="button" onClick={logoutUser}>
              <li> Online </li>
            </button>
          </LogoutButton>
        )
        }
    </div>
  );
};

export default NavBar;


