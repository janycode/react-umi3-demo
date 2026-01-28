import { NavBar, Toast } from 'antd-mobile';
import { DownOutline, SearchOutline } from 'antd-mobile-icons';

export default function Cinema(props: any) {
  const back = () => {
      props.history.push("/city")
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
