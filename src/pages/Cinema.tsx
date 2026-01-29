import { NavBar, Toast } from 'antd-mobile';
import { DownOutline, SearchOutline } from 'antd-mobile-icons';
import { connect, history } from 'umi';

function Cinema(props: any) {
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
      Cinema
    </div>
  );
}

// 集成 dva：使用高阶函数 connect
const MapStateToProps = (state: any) => {
  console.log(state);
  return {
    a: 1,
    cityName: state.city.cityName,
  };
};
export default connect(MapStateToProps)(Cinema);
