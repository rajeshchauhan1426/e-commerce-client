import React from 'react'
import Button from './ui/button'
import { ShoppingBag } from 'lucide-react';

function NavbarActions() {
  return (
    <div className='ml-auto flex items-center gap-x-4'>
       <Button>
        <ShoppingBag
        size={20}
        color='white'/>
       </Button>
        </div>
  )
}

export default NavbarActions