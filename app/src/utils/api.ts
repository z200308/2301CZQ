import http from './req'


// 获取短信验证码
export const getCodeApi = (data: any) =>
    http.get(`/verification/sms/get?mobile=${data}`)


interface denglu {
    mobile: string
    pwd: string
    deviceId: number
    deviceName: string
}

export const dengLuApi = (data: denglu) =>
    http.post('/user/m/login', data)

// 首页轮播
export const lunbo = () =>
    http.get('/banner/list?type=indexBanner')

// 首页商品
type shop = {
    page: number

    pageSize: number
}
export const shopApi = (data:shop) =>
    http.post('/shop/goods/list/v2', data)


export const oneApi=()=>
http.get('/shop/goods/category/all')


type two={
categoryId:number
page:number
pageSize:number
}
export const twoApi=(data:two)=>
http.post('/shop/goods/list/v2',data)


type info={
goodsId:any
page:number
pageSize:number
}

export const InfoApi=(data:info)=>
http.post('shop/goods/reputation/v2',data)