import getBillboard from '@/actions/get-billboard'
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async() => {
  const billboard = await getBillboard("549785e3-5edb-47da-835f-88df9518ef63");


  return (
   <Container>
     <div className='space-y-10 pb-10'>
      <Billboard data={billboard}/>
     </div>

   </Container>
  )
}

export default HomePage