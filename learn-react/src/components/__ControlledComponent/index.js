import { useState } from 'react';

const ControlledComponent = () => {
    const [value, setValue] = useState('default value');
    const onChange = (e) => {
        const text = e.target.value;
        setValue(text);
    };

    return <input value={value} onChange={onChange} />;
};

export default ControlledComponent;