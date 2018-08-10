class Data {
    header = {
        'X-HTTP-Method-Override': 'POST',
        'cli-platform': 'pc',
        'authorize-token': '',
    };
    userData = {}
    kdNum = 11
    lists = [
        {
            productKdId: '666',            //kd商品ID
            name: '666',                   //商品名
            price: '66',                 //价格    单位：分
            originalPrice: '33',         //原始价格  单位：分
            label: true,                   //商品标签 折扣
        },
        {
            productKdId: '777',            //kd商品ID
            name: '777',                   //商品名
            price: '77',                 //价格    单位：分
            originalPrice: '',         //原始价格  单位：分
            label: false,                   //商品标签 折扣
        },
    ]
}

export default new Data();