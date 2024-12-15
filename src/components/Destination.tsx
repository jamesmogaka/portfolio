import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/destination.json';
import styled from 'styled-components';

//
//The container to hold the annimated destination
const Container: React.FC<{ ref: React.MutableRefObject<null> }> = styled.svg`
    width: '32px ';
    height: '32px';
    fill: 'black';
`;

//
//This is the component to render the animated destination icon
const Destination: React.FC = () => {
    //
    //Ref hook to retrieve the container and prefom dom manipulation
    const containerRef: React.MutableRefObject<null> = useRef(null);
    //
    //Helpful in giving the component the annimation side effect
    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: containerRef.current!,
            renderer: 'svg', // or "canvas" if you prefer
            loop: true,
            autoplay: true,
            animationData,
        });

        return () => {
            anim.destroy();
        };
    }, []);

    return <svg ref={containerRef}></svg>;
};

export default Destination;
