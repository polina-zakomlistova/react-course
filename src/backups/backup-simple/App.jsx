import React, { useState } from 'react';
import Counter from './Counter.jsx';

export default function App() {
    const [maxTest, setMaxTest] = useState(5);
    const setMaxTest4 = () => setMaxTest(4);
    return (
        <div>
            <Counter max={maxTest} min={2} key={`${2}:${maxTest}`} />
            <Counter max={maxTest} />
            <button onClick={setMaxTest4}>max = 4</button>
        </div>
    );
}
