// 코드 7-25 새로운 자식 경로로 라우터 업데이트하기: chapter-07/child-route.js

import EditProduct from '@/components/EditProduct'
import Product from '@/components/Product'
...
{
    path: '/product/:id',
    name: 'Id',
    component: Product,
    props: true,
    children: [
      {
        path: 'eidt',
        name: 'Edit',
        component: EditProduct,
        props: true
      }
    ]
},
...