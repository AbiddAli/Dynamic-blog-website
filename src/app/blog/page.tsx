import Highlighted from '@/components/highlighted'
import LatestBlogs from '@/components/latestblog'
import Tech from '@/components/tech'
import React from 'react'

const blogPage = () => {
  return (
      <>
          <LatestBlogs />
          <Highlighted />
          <Tech />
      </>
  )
}

export default blogPage
