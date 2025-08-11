import React from 'react';

const Home = () => {
    return (
        <div>
            <h1 className='text-red-800'>this is home</h1>
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-error">Error</button>
        </div>
    );
};

export default Home;