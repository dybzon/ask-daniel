import styled from 'styled-components';
import { theme } from '../theme';

export const ExternalLink = styled.a`
    color: ${theme.colors.dark.white};
    text-decoration: none;
    position: relative;
    z-index: 0;

    :hover {
        :after {
            transform: rotate(-8deg) scaleX(120%);
            border-color: ${theme.colors.dark.secondary.light};
            transition: 0.3s all;
        }
    }

    :after {
        content: '';
        width: 110%;
        height: 100%;
        position: absolute;
        top: -5%;
        left: -5%;
        border-bottom: 4px dotted ${theme.colors.dark.secondary.default};
        transition: 0.3s all;
        transform: rotate(2deg);
        z-index: -1;
    }
`;
