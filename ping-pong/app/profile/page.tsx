import ProfileLayout from "@/components/profile/profile-layout"
import ProfileHeader from "@/components/profile/profile-header"
import ProfileInfo from "@/components/profile/profile-info"
import StatsAchievements from "@/components/profile/stats-achievements"
import RecentMatches from "@/components/profile/recent-matches"
import FriendsSection from "@/components/profile/friends-section"
import SettingsSidebar from "@/components/profile/settings-sidebar"

export default function ProfilePage() {
    return (
        <ProfileLayout>
        <div className="flex flex-col gap-6">
            <ProfileHeader />
            <ProfileInfo />
            <StatsAchievements />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
                <RecentMatches />
            </div>
            <div className="flex flex-col gap-6">
                <FriendsSection />
                <SettingsSidebar />
            </div>
            </div>
        </div>
        </ProfileLayout>
    )
}
