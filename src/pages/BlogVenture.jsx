import React from 'react'
import BlogHeroSection from '../components/common_component/BlogHeroSection'
import TopBlogs from '../components/common_component/TopBlogs'
import LatestBlogs from '../components/common_component/LatestBlogs'
import LatestNews from '../components/common_component/LatestNews'
import RecentPost from '../components/common_component/RecentPost'

const BlogVenture = () => {
    return (
        <div>
            <BlogHeroSection />
            <TopBlogs />
            <LatestBlogs />
            <LatestNews />
            <RecentPost />
        </div>
    )
}

export default BlogVenture