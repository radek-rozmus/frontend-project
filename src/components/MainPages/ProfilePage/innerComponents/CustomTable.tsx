import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import styled from "styled-components";
import { ChangeEvent, FC } from "react";
import { Colors } from "../../../../styledHelpers/Colors";
import { fontSize } from "../../../../styledHelpers/FontSizes";
import ProfileInput from "./ProfileInput";
import { useAppSelector } from "../../../../redux/hooks/hooks";

const DataTitle = styled.div`
    position: relative;
    left: 20px;
    top: 12px;
    color: ${Colors.grayLighter};
  `;

const TableTitle = styled(DataTitle)<{ height?: string }>`
  color: ${Colors.fontblue};
  height: ${(props) => (props.height ? props.height : "100px")};
  display: flex;
  align-items: center;
  font-size: ${fontSize[20]};
`;
const DataBlock = styled.div``;

const StyledTableCell = withStyles(() => ({
  head: {
    fontWeight: 600,
    fontSize: fontSize[18],
    color: Colors.fontblue,
    textAlign: "center",
    border: "none",
  },
  body: {
    fontSize: fontSize[18],
    color: Colors.gray,
    textAlign: "center",
    border: "none",
  },
}))(TableCell);

export interface CustomTableProps {
  data: {name: string, columnNames: string[]};
  initialData: Array<Array<string>>;
  change: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomTable: FC<CustomTableProps> = ({ data, initialData, change }) => {

  const state = useAppSelector((state) => {
    const isDetailsEditing = state.profile.isDetailsEditing;

    return { isDetailsEditing };
  });

  return (
    <DataBlock>
      <TableTitle>{data.name}</TableTitle>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {data.columnNames.map((item: string, index: number) => (
                <StyledTableCell key={index}>{item}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {initialData.map((items: string[], index: number) => (
              <TableRow key={index}>
                {items.map((item: string, key: number) => (
                  <StyledTableCell key={key}>
                    <ProfileInput
                      isInput={state.isDetailsEditing}
                      text={item}
                      slim
                      key={key}
                      change = {change.bind(this, )}
                      column={index}
                      row={key}
                    />
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </DataBlock>
  );
};

export default CustomTable;
