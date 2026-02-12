

export default function AboutPage()
{
    return(
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="text-fuchsia-800 text-justify w-75 sm:w-100 md:w-125 xl:w-150 flex flex-col gap-2 !mt-50 !mb-50 md:!mb-0 md:!mt-0">
                    <h1 className="text-3xl">What's Cat API ?</h1>
                    <p>This website was created using The Cat API from thecatapi.com. It allows me to fetch random cat images and display them dynamically on the Cats page.</p>
                    <p>I designed it to be used as a custom 404 error page for my future projects. Instead of showing a boring error message, visitors will see a random cat to make the experience more fun and friendly.</p>
                    <p>This project is also a way for me to practice working with APIs, dynamic content, and web development.</p>
                    <p>Because even error pages deserve cute cats.</p>
                </div>
            </div>
        </>
    )
}