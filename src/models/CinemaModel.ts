export default {
  namespace: 'cinema',
  state: {
    list: [],
    },
    reducers: {
        changeList(prevState: any, action: any) {
            console.log('cinema action=', action);
            return {
                ...prevState,
                list: action.payload
            }
      }
  },
  effects: {
    // 【异步数据流】要放在 effects 中使用生成器函数，才能被 dispatch
    *getList(action: any, { call, put }: any): any {
      console.log('getList');
      // call 调用 异步请求方法
      var res = yield call(requestCinemaList);
      yield put({
        type: 'changeList', //进入 同步数据流 reducers
        payload: res,
      });
    },
  },
};

async function requestCinemaList() {
    var res = await fetch(
        `https://m.maizuo.com/gateway?cityId=410100&ticketFlag=1&k=8862890`,
        {
            headers: {
                'x-client-info':
                    '{"a":"3000","ch":"1002","v":"5.2.1","e":"17689720181688867040133121","bc":"440300"}',
                'x-host': 'mall.film-ticket.cinema.list',
            },
        },
    ).then((res) => res.json());
    return res.data.cinemas;
}
