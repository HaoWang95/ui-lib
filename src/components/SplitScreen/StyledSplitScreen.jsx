import React from 'react';
import styled from 'style-components';

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div`
    flex: ${props => props.weight};
`;

export default function StyledSplitScreen({
    left: Left,
    right: Right,
    leftWeight = 1,
    rightWeight = 1,
}){
    return (
        <Container>
            <Pane>
                <Left weight={leftWeight} />
            </Pane>
            <Pane>
                <Right weight={rightWeight} />
            </Pane>
        </Container>
    );
}