// 코드 7-17 경로 파일 수정하기: chapter-07/route-product.js

import Product from '@/components/Product'
...
    },
    {
       path: '/product/:id',
       name: 'Id',
       component: Product,
       props: true
    }
...