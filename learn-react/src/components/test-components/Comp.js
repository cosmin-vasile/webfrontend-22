import { Component, useState, useEffect } from 'react';

const Comp = (props) => {
    const [nr, setNr] = useState(1);

    useEffect(() => {
        console.log('component did mount', nr);

        return () => {
            console.log('component did unmount', nr);
        };
    }, []);

    useEffect(() => {
        console.log('use effect', nr);

        return () => {
            console.log('clean up', nr);
        };
    }, [nr]);

    const onDecr = (event) => {
        setNr(nr - 1);
    };

    const onIncr = () => {
        setNr(nr + 1);
    };

    return (
        <div>
            <button onClick={onDecr}>-</button>
            <span>{nr}</span>
            <button onClick={onIncr}>+</button>
        </div>
    );
};

export default Comp;