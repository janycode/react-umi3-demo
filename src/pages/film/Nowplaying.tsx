import React, { useEffect, useState } from 'react';
import { useHistory } from 'umi';

export default function Nowplaying(props: any) {
  const [filmList, setFilmList] = useState([]);
  useEffect(() => {
    fetch(
      'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8368011',
      {
        headers: {
          'x-client-info':
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"17689720181688867040133121","bc":"440300"}',
          'x-host': 'mall.film-ticket.film.list',
        },
      },
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setFilmList(res.data.films);
      });

    return () => {};
  }, []);

  const history = useHistory()
  return (
    <div>
      {filmList.map((item: any) => (
        <li key={item.filmId} onClick={() => {
          // console.log(props);
          history.push(`/detail/${item.filmId}`)
        }}>{item.name}</li>
      ))}
    </div>
  );
}
