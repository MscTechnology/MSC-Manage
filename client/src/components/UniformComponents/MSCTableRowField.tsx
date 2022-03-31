import { TableCell, TableRow, TableRowProps} from '@mui/material';
import React, { ReactNode } from 'react';
import { connectField } from 'uniforms';

import {AutoField} from 'uniforms-material'

 
export type TableRowFieldProps = {
  children?: ReactNode;  
  removeIcon?: ReactNode;
  value?: unknown;
  hover?: TableRowProps['hover'];
  sx?: TableRowProps['sx'];
  selected?: TableRowProps['selected'];
  classes?: TableRowProps['classes'];
  style?:Object
};


function ListItem({
  children = <AutoField label={null} name="" />, 
  removeIcon,
  value,
  hover,
  sx,
  selected,
  classes,
  style
}: TableRowFieldProps) {
  return (
    <TableRow 
      // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      // style={{ height:0}}
      style={style}
    >
      {children}

      {/* <TableCell align="right" >
        <ListDelField name="" icon={removeIcon} /> 
      </TableCell> */}
    </TableRow> 
 
  );
}

export default connectField<TableRowFieldProps>(ListItem, {
  initialValue: false,
});