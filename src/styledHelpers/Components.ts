import styled from 'styled-components';
import {Colors} from './Colors';

export type Styles = {
    [ruleOrSelector: string]: string | number | Styles,
}

const color2 = (): Styles => {
    return{
        color: `${Colors.black}`
    };
};

export const border = (): Styles => {
    return {
        border: `1px solid`
    };
};

export const Wrapper = styled.div`
    background: grey;
    display: flex;
    justify-content: center;
`;