import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SelectedProfButtons extends Component {
    render() { 
        return (  
            <div className='userBtn'>
                <ul>
                    <li>
                        <a href='#'>Paw</a>
                    </li>
                    <li>
                        <Link to='/meetup'>Invite to Meet</Link>
                    </li>
                </ul>              
            </div>
        );
    }
}
 
export default SelectedProfButtons;