import { Item } from "../Section/style"

export default function DropDown({subctg : obj, show: s, cod:id}){
    if(s){
    return(
            <ul>
                {obj.subctg_maps.map((map, index) => {
                    if(map.map_ctg !== 'Uso' &&map.map_id === id){
                        return(
                            <Item key={map.map_id}>
                            <a href={"/mapas/" + map.map_id} style={{"fontWeight":"900"}}> {map.map_desc}</a>
                            </Item>
                        )
                    }else{
                        return(
                            <li key={map.map_id}>
                                <a href={'/mapas/' + map.map_id}> {map.map_desc} </a>
                            </li>
                        )
                    }
                })}
            </ul>
    )
    }else{
        return (<br/>)
    }
    }