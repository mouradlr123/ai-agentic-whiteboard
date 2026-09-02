"use client"

import SmartDoc from '@/components/ui/custom/workspace/SmartDoc';
import Whiteboard from '@/components/ui/custom/workspace/Whiteboard';
import WorkspaceHeader from '@/components/ui/custom/workspace/WorkspaceHeader'
import React, { useState } from 'react'

function Workspace() {
    const [activeTab,setActiveTab]=useState('whiteboard');
  return (
    <div>
        <WorkspaceHeader selectedTab={(value:string)=> setActiveTab(value)} />
         {activeTab == 'whiteboard' ? 
            <Whiteboard /> : <SmartDoc />
         }
    </div>
  )
}

export default Workspace