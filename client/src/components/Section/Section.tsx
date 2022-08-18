import { useFetch } from "../../hooks/useFetching";
import { Ul } from "../Loading/style";
import { Category } from '../../types/types'
import { Container } from "../ContainerZ"
import {Element} from "../Element/Element";


export const Section = ({id:url}) =>{
  const {data: subs, isFetching} = useFetch<Category[]>('/api/Data/mapas/categorias');
    return(
    <Container side={'left'} w={'30vw'} h={'18vw'} align={'center'}>
      <div style={{"textAlign":"center"}}>
        {subs?.map((sub)=>{
          return(
            <Ul key={sub?.ctg_id}>
              <h3>Estudo {sub?.ctg_desc}</h3>
              {isFetching && <img src={require('../../assets/utils/loading.gif')} alt="loading..." className='center'/>}
                {<Element ctgs={sub} id={url} graphic={true}/>}
            </Ul>
            )
        })}
        </div>
    </Container>
  )

}