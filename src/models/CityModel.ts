export default {
    namespace: "city", //命名空间，为了业务不冲突
    state: {
        cityName: "北京", //默认状态值
        cityId: "110100"
    },
    reducers: {
        // 【同步数据流】放 reducers 中即可被 dispatch
        changeCity(prevState: any, action: any) {
            console.log('city action=', action);
            return {
                ...prevState,
                cityName: action.payload.cityName,
                cityId: action.payload.cityId
            }
        }
    }
}