import React from 'react';
import { Container } from 'semantic-ui-react';

export default props => {
    return (
        <Container>
            <header>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
            </header>
            {props.children}
        </Container>
    );
};
