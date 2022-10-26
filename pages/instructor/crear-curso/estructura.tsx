import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../../components/Layout'
import NavBarCursos from '../../../components/NavBarCursos'
import CoursesCreate from '../../../components/dashboard/Instructor/CoursesCreate'

type Props = {
  category: string[]
  name_teacher:string
}

const Estructura: NextPage = ()=>{
  return(
    <CoursesCreate>
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Estructura</h1>
            </div>
        </header>
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
            </div>
            </div>
        </main>
    </CoursesCreate>
)
}

export const getStaticProps: GetStaticProps = async (ctx) => { // runs server side
  // get api categories form database and show un navBarCursos component
  return {
    props:{
      category:['category1','category2','category3'],
      lastname:"gaaaa"
    }
  }
}

export default Estructura