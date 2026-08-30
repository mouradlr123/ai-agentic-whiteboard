"use client"

import { Folder } from 'lucide-react';
import React, { useState } from 'react'
import { Button } from '../../button';
import Image from 'next/image';
import CreateNewBoardDialog from './CreateNewBoardDialog';


function ProjectList() {
   
    const [projectList, setProjectList] = useState([]);

  return (
    <div>
        {projectList.length === 0 ? (
            //Empty State
            <div className='flex flex-col items-center p-10 border rounded-xl mt-10 gap-3'>
                <Image src="/folder1.png" alt='Folder' width={90} height={90} />
                <h2 className='text-2xl font-bold'>No Boards Found</h2>
                <p>Create your first board to start brainstorming, Planning!</p>
                <CreateNewBoardDialog />
            </div>
        ): <div>
            {/* Progect List */}
        </div>
        }
    </div>
  )
}

export default ProjectList