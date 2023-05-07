import React from 'react';
import InputForm from './InputForm';

function TabContent({ tab }) {
    return (
        <div className="tab-content">
            <h1 className='test'>HELLO</h1>
            <img src={tab.image} alt="" />
            <p>{tab.text}</p>
            <input type="range" min="1" max="5" value="3" />
            <InputForm />
        </div>
    );
}

export default TabContent;