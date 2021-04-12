import { FC } from "React";
import styled from "styled-components";

const Menu = styled.div`
display: inline-block;
`;

export interface ExpandedMenuProps {
    display?: boolean,
}
 
export const ExpandedMenu: FC<ExpandedMenuProps> = (props) => {
    return ( 
        props.display?
        <Menu>
          <p>expandedMenu</p>  
        </Menu>
        :null
     );
}