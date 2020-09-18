import React from 'react';

const Buttons = props => (
    <section className='buttons-section' >
        <button className='previous-next' onClick={props.previousUserFn}>&lt; Previous</button>
        <section className='middle-buttons'>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
        </section>
        <button className='previous-next' onClick={props.nextUserFn}>Next &gt; </button>
    </section>
)

export default Buttons;