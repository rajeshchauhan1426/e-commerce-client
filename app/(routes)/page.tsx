
import getProducts from '@/actions/get-Product';
import getBillboard from '@/actions/get-billboard';
import Billboard from '@/components/billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async() => {
  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard("549785e3-5edb-47da-835f-88df9518ef63");


  return (
   <Container>
     <div className='space-y-10 pb-10'>
      <Billboard data={billboard}/>
     </div>
     <div className='flex flex-colgap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title="Featured Product" items={[ ]}/>
     </div>

   </Container>
  )
}

export default HomePage