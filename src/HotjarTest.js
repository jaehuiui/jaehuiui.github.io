import React, {useEffect} from 'react';
import { hotjar } from 'react-hotjar';

const HotjarTest = () => {

    useEffect(() => {
        if(!hotjar.initialized()) {
            console.log('hotjar initialize')
            hotjar.initialize(3121652, 6);
        }
    }, [])

    return (
        <div>
            <h1>Hotjar Text</h1>
            <p>Click Button</p>
            <button onClick={() => {
                console.log('실험 해보자')
            }}>테스트용 버튼</button>
        </div>
    )
}

export default HotjarTest
