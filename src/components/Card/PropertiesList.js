import React from "react";
import { ListItemText, Box, ListItemAvatar, ListItem } from "@mui/material";
import AttractionsIcon from '@mui/icons-material/Attractions';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ShowerIcon from '@mui/icons-material/Shower';



const PropertiesList = ({ plant }) => {

  const watering = (watertype) => {
    const LowMatWatering = [
      "Must dry between watering & Water only when dry",
      "Water only when dry & Must dry between watering",
      "Keep moist between watering & Can dry between watering",
      "Water when soil is half dry & Can dry between watering",
      "Water when soil is half dry & Water only when dry",
      "Can dry between watering & Water when soil is half dry",
    ];
    const HighMatWatering = [
      "Keep moist between watering & Water when soil is half dry",
      "Water when soil is half dry & Change water regularly in the cup",
      "Change water regularly in the cup & Water when soil is half dry",
      "Keep moist between watering & Must not dry between watering",
    ];

    if (LowMatWatering.includes(watertype)) {
      return "If you forget to water me, I won't turn on you.";
    } else if (HighMatWatering.includes(watertype)) {
      return "You'll need to give me your upmost love and attention.";
    } else {
      return "I'm yours!";
    }
  };

  return (
    <Box>
<ListItem>
  <ListItemAvatar><AttractionsIcon /> </ListItemAvatar> 
    <ListItemText primary={`My ${plant.Appeal}`} />
    </ListItem>
    <ListItem>
  <ListItemAvatar><WbSunnyIcon /></ListItemAvatar> 
    <ListItemText primary={`I enjoy the ${plant.Climat} climate`} />
    </ListItem>
    <ListItem>
    <ListItemAvatar><ShowerIcon /></ListItemAvatar> 
    <ListItemText primary={`${watering(plant.Watering)}`} />
    </ListItem>
    </Box>
  );
};

export default PropertiesList;
