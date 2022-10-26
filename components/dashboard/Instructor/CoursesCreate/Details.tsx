import Link from "next/link";
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useState } from "react";
import CoursesCreate from './index'

type Props = {
  children: React.ReactNode
  category: string[]
  name_teacher: string
};

const Details: NextPage = ()=>{
  return(
    <CoursesCreate>
    <div>
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Detalles</h1>
            </div>
        </header>
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
            </div>
            </div>
        </main>
    </div>
    </CoursesCreate>
  )
}

export default Details