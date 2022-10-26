import Link from "next/link";
import type { NextPage } from 'next'


type Props = {
  children: React.ReactNode
};

export default function createCourse({ children}:Props) {
   return(
      <div className="min-h-full">
         <nav className="bg-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex h-8 items-center justify-between">
                  <div className="flex items-center">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="hidden md:block">
                     <div className="ml-10 flex items-baseline space-x-4">
                     <Link href="/instructor">
                           <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                              Volver a los cursos
                           </a>
                     </Link>
                        <h2>Nombre curso</h2>
                        <h3>Estado curso</h3>
                     </div>
                  </div>
                  </div>       
               </div>
            </div>
         </nav>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              </div>
              <div className="hidden md:block">
               <div className="ml-10 flex items-baseline space-x-4">
               <Link href="/instructor/crear-curso">
                  <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                     Detalles
                  </a>
               </Link>
               <Link href="/instructor/crear-curso/estructura">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                     Estructura
                  </a>
               </Link> 
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </button>
              </div>
            </div>
           
          </div>
        </div>
    
      
      </nav>
      {children}
    </div>
     )
 }