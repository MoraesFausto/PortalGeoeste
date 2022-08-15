import React from 'react';
import { User } from '../interfaces';
import '../styles/style.css'
import { Form1 } from '../components/Forms/style';
import { Auth } from '../hooks/useAuth';

const Home: React.FC = () =>{

    const { user, err, check } = Auth<User | null>('api/perfil');

  
    return (
        <div id="Home">
            
           
            { !err && check?(
                <div>
                    <br/>
                    <br/>
                    <h2>Bem vindo { user?.email } ao Portal Geoeste!</h2>
                    <h3>Portal de Dados Ambientais e Agropecuários da Mesorregião Oeste do Paraná</h3>
                </div>
            ): err && !check ?(
                <div>
                <h2>Projeto Geoeste</h2>
            <h3>Portal de Dados Ambientais e Agropecuários da Mesorregião Oeste do Paraná</h3>

            <div>
                <Form1 className='box' method="post">
                <a href="/login" >
                <button type="button" value="Entrar">Entrar</button>
                </a>
                <a href="/register">
                <button type="button" value="Cadastrar">Cadastrar</button>
                </a>
                </Form1>
                
            </div>
            </div>
            ):(
                <div></div>
            )
            
            }
            
          </div>
    )
}

export default Home
