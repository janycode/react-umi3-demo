import React, { useEffect, useState } from 'react';
import { IndexBar, List } from 'antd-mobile';

export default function City(props: any) {
  const [cityList, setCityList] = useState<any>([]);

  const filterCity = (cities: any) => {
    const letterArr: string[] = [];
    const newlist: any = [];
    for (var i = 65; i < 91; i++) {
      letterArr.push(String.fromCharCode(i));
    }
    //cities.filter((item: any) => item.pinyin.substring(0, 1).toUpperCase())
    for (var c in letterArr) {
      var citiesItems = cities.filter(
        (item: any) =>
          item.pinyin.substring(0, 1).toUpperCase() === letterArr[c],
      );
      citiesItems.length &&
        newlist.push({
          title: letterArr[c],
          items: citiesItems,
        });
    }
    return newlist;
  };

  //https://m.maizuo.com/gateway?k=1418008
  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?k=1418008', {
      headers: {
        'x-client-info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"17689720181688867040133121","bc":"440300"}',
        'x-host': 'mall.film-ticket.city.list',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.cities);
        setCityList(filterCity(res.data.cities));
      });
  }, []);

  const changeCity = (item: any) => {
      console.log(item);
      //todo... 携带城市名称 和 id 到 cinema 页面
      props.history.push(`/cinema`)
  };

  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar>
        {cityList.map((group: any) => {
          const { title, items } = group;
          return (
            <IndexBar.Panel index={title} title={title} key={title}>
              <List>
                {items.map((item: any, index: number) => (
                  <List.Item key={index} onClick={() => changeCity(item)}>
                    {item.name}
                  </List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          );
        })}
      </IndexBar>
    </div>
  );
}
