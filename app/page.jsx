
/**
 * La page d'accueil
 * @returns 
 */
export default function HomePage()
{
    return (
        <>
        <div className="w-screen h-screen bg-tulipe flex flex-col items-center justify-center gap-10">
            <h1 className="text-fuchsia-800 text-3xl font-bold !mx-5 xl:text-7xl md:text-5xl">Welcome to the Cat Api !</h1>
            <img src="/images/Cat_Hello.gif" alt="Cat Hello" className="w-100" />
        </div>
        </>
    )
}