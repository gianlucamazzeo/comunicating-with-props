import React from 'react';

const approvalCard = () => {

    return(
        <div className="ui cards" style={{marginBottom:'10px'}}>
            <div class="content" style={{marginRight:'5px'}}>Sei sicuro?</div>
                <div class="extra content">
                <div class="ui two buttons">
                    <div class="ui basic green button">Approve</div>
                    <div class="ui basic red button">Decline</div>
                </div>
                </div>
        </div>
        
    )

   
}


export default approvalCard;