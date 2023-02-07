import Image from 'next/image';

export const Cover = ({children, background}) => {
    return <div
        className="h-screen text-white bg-red-500 relative min-h-[400px] flex justify-center items-center">
        <Image
            src={background}
            alt="Cover"
            width={500}
            height={500}
            className="mix-blend-soft-light"
        />
        <div className='max-wxl z-10'>{children}</div>
        </div>
}