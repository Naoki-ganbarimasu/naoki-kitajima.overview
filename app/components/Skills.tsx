import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <main className='mt-3'>
        <h1 className='text-3xl text-center'>Skills</h1>
        <div>
            <h2 className='text-xl'>Languages</h2>
            <div className='flex'>
                <Image src='/typescript.svg' alt='typescript' width={100} height={100} />
                <Image src='/javascript.svg' alt='javascript' width={100} height={100} />
        </div>
            </div>
            <h2 className='text-xl'>Frontend Developement</h2>
            <div className='flex'>
                <Image src='/html.svg' alt='html' width={100} height={100} />
                <Image src='/css.svg' alt='css' width={100} height={100} />
                <Image src='/react.svg' alt='react' width={100} height={100} />
                <Image src='/next-js.png' alt='next.js' width={100} height={100} />
            </div>
            <h2 className='text-xl'>Backend Developement</h2>
            <div className='flex'>
                <Image src='/node.svg' alt='node.js' width={100} height={100} />
                <Image src='/express.svg' alt='express' width={100} height={100} />
                <Image src='/prisma.svg' alt='prisma' width={100} height={100} />
            </div>
            <h2 className='text-xl'>Database</h2>
            <div>
                <Image src='/postgreesql.svg' alt='postgresql' width={100} height={100} />
            </div>
    </main>
  )
}

export default Skills
