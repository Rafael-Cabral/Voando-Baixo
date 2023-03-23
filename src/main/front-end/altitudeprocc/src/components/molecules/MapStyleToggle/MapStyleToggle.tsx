import React from 'react';
import { Text } from '../../atoms/Text/Text';
import { StyledToggleButton, StyledToggleContainer } from './MapStyleToggle.style';


export const MapStyleToggle = ({ mapStyle, setMapStyle } : { mapStyle : any, setMapStyle : any}) => {
  const handleStyleChange = () => {
    if(mapStyle == "mapbox://styles/mapbox/satellite-v9") {
        setMapStyle("mapbox://styles/mapbox/outdoors-v11");
    } else {
        setMapStyle("mapbox://styles/mapbox/satellite-v9");
    }
  };

  return (
    <StyledToggleContainer>
      <StyledToggleButton onClick={() => handleStyleChange()}>
        <Text>{ mapStyle == "mapbox://styles/mapbox/satellite-v9" ? "Outdoors" : "Satellite" }</Text>
      </StyledToggleButton>
    </StyledToggleContainer>
  );
};
