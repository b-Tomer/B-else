import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer dir='rtl' className="bg-gray-100 py-6">
            <div className="flex flex-col justify-center items-center gap-5 mx-auto px-6">
                    <Image
                        src='https://res.cloudinary.com/dlz0x3nss/image/upload/v1715603117/main-web/uht6mggxu01sxytu6vx1.jpg'
                        alt="logo"
                        height={60}
                        width={60}
                        className='rounded-full'
                        />
            </div>
                <div className="text-center py-2">
                    <p>© כל הזכויות שמורות לאתר B-else </p>
                                    </div>
        </footer>
    )
}
