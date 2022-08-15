import { useParams } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import GetMap from '../hooks/getMap';

function Dashboard() {
  let { id } = useParams();
 
  return (
    <div id="dashboard">
      <br/>
        <div id="map">
          <GetMap prop={id} />
        </div>    

    </div>
  )
}

export default Dashboard;