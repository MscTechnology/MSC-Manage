import  { ListProps } from '@material-ui/core/List'; 
import React, {
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { FieldProps, connectField, filterDOMProps } from 'uniforms';

import MSCTableRowField from './MSCTableRowField'; 
import { ListAddField } from 'uniforms-material';

export type TableFieldProps = FieldProps<
    unknown[],
    ListProps,
    {
        addIcon?: ReactNode;
        initialCount?: number;
        itemProps?: object,
        columns: Array<string>,
        isDeleteColumn?: boolean
    }
>;

const List = ({
  addIcon,
  children = <MSCTableRowField name="$" />,
  initialCount,
  itemProps,
  label,
  value, 
  columns,
  isDeleteColumn = false,
  ...props
}: TableFieldProps) => {
    //  console.log('wwwWW',value)
    //  console.log('wwwWW',Children)
  return (
      <>
          {/* <TableContainer> */}
              <Table stickyHeader style={{border: '0.5px solid #DCDCDC'}} sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                  <TableHead>
                      <TableRow>
                          {
                              columns.map(column => <TableCell align="center">{(column)}</TableCell>)
                          }  
                          {
                              isDeleteColumn ? <TableCell align="center">{"Delete"}</TableCell> : null
                          }
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {/* {
                          Children.map(children,(child, childIndex) =>{
                            const ex = (isValidElement(child)
                            ? cloneElement(child, {
                                key: `${1}-${childIndex}`,
                                name: child.props.name?.replace('$', '' + 1),
                                ...itemProps,
                            })
                            : child)
                              console.log("C",ex)
                              console.log("İ",childIndex)
                          })
                      } */}
                      {value?.map((item, itemIndex) =>
                          Children.map(children, (child, childIndex) =>
                              isValidElement(child)
                                  ? cloneElement(child, {
                                      key: `${itemIndex}-${childIndex}`,
                                      name: child.props.name?.replace('$', '' + itemIndex),
                                      ...itemProps,
                                  })
                                  : child,
                          ),
                      )}
                  </TableBody>
              </Table>
          {/* </TableContainer>    */}
      <ListAddField icon={addIcon} initialCount={initialCount} variant='standard' margin='none' name="$" />
    </>
  );
}

export default connectField<TableFieldProps>(List);