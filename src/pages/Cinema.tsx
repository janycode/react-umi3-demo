import { NavBar, Toast } from 'antd-mobile';
import { DownOutline, SearchOutline } from 'antd-mobile-icons';
import { useEffect } from 'react';
import { connect, history } from 'umi';

function Cinema(props: any) {
  useEffect(() => {
    if (props.list.length === 0) {
      //请求数据
      props.dispatch({
        type: "cinema/getList"
      })
    } else {
      console.log("cinema list 走缓存");
    }
  }, []);

  const back = () => {
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
      <ul>
        {
          props.list.map((item:any) => 
            <li key={item.cinemaId}>{item.name}</li>
          )
        }
      </ul>
    </div>
  );
}

// 集成 dva：使用高阶函数 connect
const MapStateToProps = (state: any) => {
  console.log(state);
  return {
    a: 1,
    cityName: state.city.cityName,
    list: state.cinema.list,
  };
};
export default connect(MapStateToProps)(Cinema);
