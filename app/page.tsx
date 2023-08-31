import React from 'react'

type Props = {}

const page = (props: Props) => {
  console.log('123123')

  return (
    <div>
      {/* Prompt cards */}
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 text-slate-900 dark:text-slate-200 sm:grid-cols-2 lg:grid-cols-2'
      >
        <li className='group col-span-1 grid max-w-sm cursor-pointer justify-items-center rounded-lg'>
          <div
            className='h-64 w-full rounded-lg bg-slate-300 bg-cover bg-center shadow-md'
            style={{
              backgroundImage: 'url(https://mpost.io/wp-content/uploads/image-34-32.jpg);'
            }}
          ></div>

          <div className='-mt-10 w-11/12 overflow-hidden rounded-lg border-2 border-transparent bg-slate-50 shadow-lg transition-colors group-hover:bg-blue-600 dark:bg-slate-900'>
            <h3 className='p-2 text-center text-sm font-semibold text-slate-800 transition-colors group-hover:text-slate-50 dark:text-slate-200'>
              Dall-E
            </h3>
            <div className='flex p-2'>
              <span className='truncate text-sm text-slate-500 transition-colors group-hover:text-slate-200'>
                Photo of an extremely cute alien fish swimming
              </span>
            </div>
          </div>
        </li>

        <li className='group col-span-1 grid max-w-sm cursor-pointer justify-items-center rounded-lg'>
          <div
            className='h-64 w-full rounded-lg bg-slate-300 bg-cover bg-center shadow-md'
            style={{
              backgroundImage:
                'url(https://i0.wp.com/www.followchain.org/wp-content/uploads/2022/09/midjourney-warrior.png?resize=700%2C400&ssl=1);'
            }}
          ></div>

          <div className='-mt-10 w-11/12 overflow-hidden rounded-lg border-2 border-transparent bg-slate-50 shadow-lg transition-colors group-hover:bg-blue-600 dark:bg-slate-900'>
            <h3 className='p-2 text-center text-sm font-semibold text-slate-800 transition-colors group-hover:text-slate-50 dark:text-slate-200'>
              Midjourney
            </h3>
            <div className='flex p-2'>
              <span className='truncate text-sm text-slate-500 transition-colors group-hover:text-slate-200'>
                Enraged warrior, monsterlike armor, living armor, character design, full
                body portrait, organic armor, high detail, intricate detail
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default page
