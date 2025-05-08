import React, { useRef } from 'react'
import './App.css'

const ScrollView = () => {
    const listRef = useRef(null);

    function viewScrollInView(index) {
        const listNode = listRef.current;
        const imageNode = listNode.querySelectorAll('li > img')[index];
        imageNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    return (
        <div>
            <nav>
                <button onClick={() => viewScrollInView(0)}>Neo</button>
                <button onClick={() => viewScrollInView(1)}>Millie</button>
                <button onClick={() => viewScrollInView(2)}>Bella</button>
            </nav>
            <div>
            <ul ref={listRef}>
                <li>
                    <img src='https://placecats.com/neo/300/200' />
                </li>
                <li>
                    <img src='https://placecats.com/millie/200/200' />
                </li>
                <li>
                    <img src='https://placecats.com/bella/199/200' />
                </li>
            </ul>
            </div>
        </div>
    );
}

export default ScrollView