import React from 'react';

let PartyViewListEntry = (props) => {
  return (
    <tr>
      <td> <a href={ props.item.url }><h3>{ props.item.name }</h3></a> </td>
      <td> <img src={props.item.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" /> </td>
    </tr>
  );
};

export default PartyViewListEntry;


