import { DropDownProps } from "../../interfaces"
import { Item } from "../Section/style"

export const DropDown: React.FC<DropDownProps> = (props) => {
    if(props.show){
    return(
            <ul>
                {props?.subctg?.subctg_maps.map((map, index) => {
                    if(map.map_ctg !== 'Uso' &&map.map_id === props.id){
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