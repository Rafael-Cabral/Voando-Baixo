import FooterMap from "../components/FooterMap";
import SidebarMap from "../components/SideBarMap";
import VisualizationMap from "../components/VisualizationMap";


function Map() {
    return(
        <div>
            <SidebarMap />
            <VisualizationMap/>       
            <FooterMap/>
        </div>
    )
}

export default Map;