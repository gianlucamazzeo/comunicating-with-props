import React from 'react';

const approvalCard = props => {
    //console.log(props);
    return(
        <div className="ui card">
            <div className="content"></div>
                <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
                </div>
                </div>
            {props.children}
        </div>
        
    )

   
}


export default approvalCard;