import React from 'react'
import { connectField } from 'uniforms'
import { AutoField } from 'uniforms-material'
import { TableCell } from '@mui/material';

type Props = {
    Cname: string;
    onChange: () => any,
    disabled:boolean;
    value?:any
    options?:Array<any>
    InputProps?: any
} 
export const CustomTableCell = ({Cname, InputProps, disabled = false, ...props}: Props) => {
    return <TableCell style={{ border: '0.5px solid #DCDCDC', height: '5',padding: 0, backgroundColor: (disabled ? "#E8E8E8" : "")}}>
    <AutoField
      style={{ padding: "0px 5px" , margin: "0px"}}
      label=""
      size="small"
      variant="standard"
      name={Cname}//SORUN VARSA KALDIR
   InputProps={{ disableUnderline: true, ...InputProps }}
      
      disableUnderline
      onChange={props.onChange}
      value={props.value}
      options={props.options}
    />
  </TableCell>
}

export const MSCTableCell = connectField(CustomTableCell)