import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function ServicePreview({ service }) {
    const {iconURL, text, link, header} = service
    const router = useRouter()

    function handleClick() {
        router.push(link)
    }

    return (
        <div className='flex flex-col gap-2 items-center'>

            <div className='flex justify-center'>
                <Image
                    src={iconURL}
                    alt='icon'
                    width={50}
                    height={50} />
            </div>
            <h2 className='font-bold text-xl'>{header}</h2>
            <p> {text}</p>

            <button onClick={handleClick} className='bg-main-purple text-white p-2 w-max my-2'>LEARN MORE</button>
        </div>
    )
}
