import React, { useEffect } from 'react';

export default function Comingsoon() {
  useEffect(() => {
    fetch(
      '/ajax/comingList?ci=73&token=&limit=10&optimus_risk_level=71&optimus_code=10',
    ).then(res => res.json()).then(res => {
      console.log(res);
    })
  }, []);

  return <div>Comingsoon</div>;
}
