"use client"

import { useState } from "react";
import Field from "@/components/Field";

export default function ContactPage()
{
    const [error, setError] = useState("")

    return(
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="w-full !mx-5 md:w-xl md:!mx-0">
                    <h1 className="text-fuchsia-800 text-2xl !mb-4">Contact</h1>
                    <form>
                        <div className="flex w-full justify-between flex-col gap-2 items-center">
                            <Field
                                type="firstname"
                                name="firstname"
                                error={error}
                                placeholder="FirstName"
                            />
                            <Field
                                type="lastname"
                                name="lastname"
                                error={error}
                                placeholder="LastName"
                            />
                            <Field
                                type="email"
                                name="email"
                                error={error}
                                placeholder="Email"
                            />
                            <div className="h-25 w-full">
                                <Field
                                    as="textarea"
                                    type="message"
                                    name="message"
                                    error={error}
                                    placeholder="Message"
                                />
                            </div>
                            <button className="w-full bg-fuchsia-800 text-white flex justify-center items-center rounded h-10 ">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}