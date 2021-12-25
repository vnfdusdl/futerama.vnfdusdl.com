import styled from '@emotion/styled';
import React from 'react';
import { Navigation  } from './Navigation';

export const Layout: React.FC = ({ children }) => {
    return (
        <App>
            <Navigation/>
            <main>
                { children }
            </main>
        </App>
    )
}

const App = styled.div`
    background-color: #fff;
    margin: 0;
`