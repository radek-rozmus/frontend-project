import {FC} from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../../../redux/hooks/hooks';
import { Colors } from '../../../../../styledHelpers/Colors';
import { fontSize } from '../../../../../styledHelpers/FontSizes';
import { ActionNumberPayload } from '../../../../../redux/types/Action';

const PageButtonWrapper = styled.button`
  display: inline-block;
  height: 100%;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  color: ${Colors.lightblue};
  font-size: ${fontSize[16]};
  padding: 0 6px;
  background-color: ${Colors.backgroundgray};
`;

export interface PageButtonProps {
    click(pages: number):ActionNumberPayload;
    pages: number;
    text: string;
}
 
export const PageButton: FC<PageButtonProps> = ({click, pages, text}) => {
    const dispatch = useAppDispatch();
    const handleButtonClick = () => {
        dispatch(click(pages));
    }

    return ( 
        <PageButtonWrapper onClick = {handleButtonClick}>
            {text}
        </PageButtonWrapper>
     );
}