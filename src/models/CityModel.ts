export default {
    namespace: "city", //命名空间，为了业务不冲突
    state: {
        cityName: "北京", //默认状态值
        cityId: "110100"
    },
    reducers: {
        changeCity(prevState: any, action: any) {
            console.log('action=', action);
            return {
                ...prevState,
                cityName: action.payload.cityName,
                cityId: action.payload.cityId
            }
        }
    }
}