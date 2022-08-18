
import { Container, UL } from "../ContainerZ"
import { Li } from './style'

export function Legend({info:legend, atr: atr_n}){

  if(atr_n != null){
    return (
      <Container side={'right'} w={'25vw'} h={'19vw'}> 
          
          <h3 >{atr_n}</h3>
          <UL>
            <ul>
              {legend?.map(repo =>{
                return(
                  <Li color={repo.color} key={repo.atr}>
                   <button className="btn"> {repo.atr} </button>
                  </Li>
                )
              })}
            </ul>
            </UL>
        </Container>
    )
  }else{
    return(
      <div></div>
    )
  }
}
