import { useGetUserDetailQuery } from 'generated/graphql'
import React from 'react'
import { useEffect } from "react";

function PersonelDetail() {
  const [dataUser, setDataUser] = React.useState([])
  // const { data, loading, error } = useGetUserDetailQuery({
  //   variables: {
  //      prmId: id // value for 'prmId'
  //   },
  // });

  // useEffect(() => {
  //   if (data) {
  //     setDataUser(data.getUserDetail)
  //   }
  // },[data])
  return (
    <div>PersonelDetail</div>
  )
}

export default PersonelDetail