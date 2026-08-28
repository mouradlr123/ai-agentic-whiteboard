import ProjectList from '@/components/ui/custom/dashboard/ProjectList'
import WelcomeBanner from '@/components/ui/custom/dashboard/WelcomeBanner'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardPage() {
  return (
    <div>
        {/* Welcome Banner */}
        <WelcomeBanner />

        {/* Project List / Empty State */}
        <ProjectList />
    </div>
  )
}

export default DashboardPage