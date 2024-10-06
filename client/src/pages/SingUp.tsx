import { useRef } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"


const SingUp = () => {
    const userNameRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const imageUrlRef = useRef<HTMLInputElement>(null)
  return (
    <>
    <h1 className="text-2xl font-bold text-center mb-8">
        Sign Up

    </h1>
    <form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 justify-items-end">
        <label htmlFor="username"> Username</label>
        <Input id='username' pattern="\S*" required ref={userNameRef} />
        <label htmlFor="name"> Name</label>
        <Input id='name' required ref={nameRef} />
        <label htmlFor="imageUrl"> Image Url</label>
        <Input id='imageUrl' type="url" pattern="\S*" required ref={imageUrlRef} />
        <Button type='submit' className="col-span-full">Singup</Button>
    </form>
    </>
  )
}

export default SingUp
