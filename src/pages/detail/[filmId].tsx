import React from 'react'
import { useParams } from 'umi'

interface IParams {
    filmId: string
}
export default function Detail(props: any) {
  // console.log(props); // props.match.params.filmId
  const params = useParams<IParams>()
  console.log(params.filmId);
  return <div>Detail-{params.filmId}</div>;
}
