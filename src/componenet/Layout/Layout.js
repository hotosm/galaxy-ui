import React, { useState } from "react";

const layout = props => {
   
    
    return (
      <React.Fragment>
       
        <div>
            <span> <a href="/live-events"> Live Events</a></span>
            <span> || </span>
            <span> <a href="/org-contribution"> Org Contribution </a></span>
        </div>
        {/* <div class="w3-sidebar w3-light-grey w3-bar-block" >
          <h3 class="w3-bar-item">Menu</h3>
          <a href="#" class="w3-bar-item w3-button">Link 1</a>
          <a href="#" class="w3-bar-item w3-button">Link 2</a>
          <a href="#" class="w3-bar-item w3-button">Link 3</a>
        </div> */}
        <main >{props.children}</main>
      </React.Fragment>
    );
  
}


export default layout;
