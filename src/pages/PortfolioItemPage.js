import React from 'react';

const PortfolioItem = (props) => (
    <div className="content">
        <main className="hotel-view">
            <h1>A Thing I've Done</h1>
            <p>This page is for the item with the id of {props.match.params.id}</p>
        </main>
    </div>
)

export default PortfolioItem; 