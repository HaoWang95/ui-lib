import React from 'react';
import styled from 'style-components';

const Container = styled.div`

`;

// Split the screen to left and right
export const SplitScreen =({
    left: Left,
    right: Right,
}) => {
    return (
        <>
            <Container>
                <Left />
            </Container>
            <Container>
                <Right />
            </Container>
        </>
    )
}