import React from 'react';

const HotjarTest = () => {
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
