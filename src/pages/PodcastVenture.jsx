import React from 'react'
import PodcastHerosection from '../components/common_component/PodcastHerosection'
import SubscribeSection from '../components/common_component/SubscribeSection'
import LatestPodcast from '../components/common_component/LatestPodcast'
import RecentBlogs from '../components/common_component/RecentBlogs'

const PodcastVenture = () => {
    return (
        <div>
            <PodcastHerosection />
            <SubscribeSection />
            <LatestPodcast />
            <RecentBlogs />
        </div>
    )
}

export default PodcastVenture