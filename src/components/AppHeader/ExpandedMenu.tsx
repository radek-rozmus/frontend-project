import { FC } from "React";
import styled from "styled-components";
import { border } from "../../styledHelpers/Components";
import { Colors } from "../../styledHelpers/Colors";

const Menu = styled.div`
position: absolute;
top: 32px;
width: 180px;
left:0;
background: white;
padding: 16px;
${border(1, 'solid', Colors.black)};
ul {
  ${border(1, 'solid', Colors.red)};
}

`;
 
export const ExpandedMenu: FC = (props) => {
    return ( 
        <Menu>
          <ul>
            <li>q</li>
            <li>q</li>
            <li>q</li>
            <li>q</li>
            <li>q</li>
            <li>q</li>
            <li>q</li>
            <li>q</li>
            <li>q</li>
            <li>q</li>
          </ul>  
        </Menu>
     );
}