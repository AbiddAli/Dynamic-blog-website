import Banner from '@/components/banner'
import Highlighted from '@/components/highlighted'
import LatestBlogs from '@/components/latestblog'
import Tech from '@/components/tech'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestBlogs/>
      <Highlighted/>
      <Tech/>
    </div>
  )
}

export default Home

