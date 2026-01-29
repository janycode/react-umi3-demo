import { NavBar, DotLoading } from 'antd-mobile';
import { DownOutline, SearchOutline } from 'antd-mobile-icons';
import { useEffect } from 'react';
import { connect, history } from 'umi';

function Cinema(props: any) {
  useEffect(() => {
    if (props.list.length === 0) {
      //请求数据
      props.dispatch({
        type: "cinema/getList",
        payload: {
          cityId: props.cityId  //带着参数
        }
      })
    } else {
      console.log("cinema list 走缓存");
    }
  }, []);

  const back = () => {
    // 清空 cinema list，为了展示切换城市后最新的数据
    props.dispatch({
      type:"cinema/clearList"
    })
    history.push('/city');
  };
  return (
    <div>
      <NavBar
        onBack={back}
        back={
          <div>
            {props.cityName}
            <DownOutline />
          </div>
        }
        backIcon={false}
        right={<SearchOutline />}
      >
        影院
      </NavBar>
      {
        props.loading && 
        /* 加载中 白点... */
        <span style={{ fontSize: 14 }}>
          <DotLoading />
        </span>
      }
      <ul>
        {props.list.map((item: any) => (
          <li key={item.cinemaId}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

// 集成 dva：使用高阶函数 connect
const MapStateToProps = (state: any) => {
  console.log(state);
  return {
    a: 1,
    loading: state.loading.global,
    cityName: state.city.cityName,
    cityId: state.city.cityId,
    list: state.cinema.list,
  };
};
export default connect(MapStateToProps)(Cinema);
