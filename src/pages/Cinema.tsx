import { NavBar, Toast } from 'antd-mobile';
import { DownOutline, SearchOutline } from 'antd-mobile-icons';
import { history } from 'umi';

export default function Cinema() {
  const back = () => {
      history.push("/city")
  }
  return (
    <div>
      <NavBar
        onBack={back}
        back={
          <div>
            北京
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
