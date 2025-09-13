import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import item from "./Item";



function ItemList({items}){
    return(
        <container>
            <row>
                {items.map(item => <item item= {item} key={item.id}/> )}
            </row>
        </container>
    )
}
export default ItemList