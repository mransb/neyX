import React from 'react';
import SmallCard from './UpdatedSmallCard';
import GroupsIcon from "@mui/icons-material/Groups";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardGroup = () => {
  return (
    <div className="container-fluid d-flex justify-content-between" style={{marginLeft:"-.8rem"}}>
      <SmallCard title="Total Customers" icon={<GroupsIcon style={{color:"#1E2875"}}/>} times="45" />
      <SmallCard title="New SignUps" icon={<PersonAddIcon style={{color:"#1E2875"}}/>} times="11" />
      <SmallCard title="Total call received" icon={<MapsUgcIcon style={{color:"#1E2875"}}/>} times="6" />
      <SmallCard title="Meeting done" icon={<FavoriteIcon style={{color:"#1E2875"}}/>} times="9" />
      <SmallCard title="Agents Live" icon={<FavoriteIcon style={{color:"#1E2875"}}/>} times="9" />
    </div>
  )
}

export default CardGroup