
/**
 * La page d'accueil
 * @returns 
 */
export default function HomePage()
{
    return (
        <>
            <div className="w-screen min-h-screen flex flex-col items-center justify-center gap-5 xl:gap-10">
                <h1 className="text-fuchsia-800 text-3xl font-bold !mx-5 xl:text-7xl md:text-5xl">Welcome to the Cat Api !</h1>
                <img src="/images/Cat_Hello.gif" alt="Cat Hello" className="w-50 md:w-75 xl:w-100" />
            </div>
        </>
    )
}