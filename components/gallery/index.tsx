"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Image as ImageType } from '@/types'

import Image from 'next/image'
import GalleryTab from './gallery-tab'

interface GalleryProps {
  image: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ 
  image=[]
}) => { 
  return (
   <TabGroup as="div" className="flex flex-col-reverse">
    <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
    <TabList className="grid grid-cols-4 gap-6">
      
      {image.map((image ) => (
        <GalleryTab key={image.id} images={image}/>
      
      ))}
    
    </TabList>
    </div>
    
   </TabGroup>
   
  )
}

export default Gallery;
