import { FormEvent, useRef } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useAuth } from "../context/AuthContex"


const SingUp = () => {
    const userNameRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const imageUrlRef = useRef<HTMLInputElement>(null)
    const {signup} = useAuth();
function handlesubmit(e:FormEvent){
  e.preventDefault()
  if(signup.isPending) return
  const userName= userNameRef.current!.value
  const name = nameRef.current!.value
  const imageUrl= imageUrlRef.current!.value
if (userName === null || userName=== "" || name === null || name === "") {
  return
}

  
  signup.mutate({id:userName,name,image:imageUrl})
}


  return (
    <>
    <h1 className="text-2xl font-bold text-center mb-8">
        Sign Up

    </h1>
    <form onSubmit={handlesubmit}
     className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 justify-items-end">
        <label htmlFor="username"> Username</label>
        <Input id='username' pattern="\S*" required ref={userNameRef} />
        <label htmlFor="name"> Name</label>
        <Input id='name' required ref={nameRef} />
        <label htmlFor="imageUrl"> Image Url</label>
        <Input id='imageUrl' type="url"  ref={imageUrlRef} />
        <Button disabled={signup.isPending} type='submit' className="col-span-full">

          {
            signup.isPending? "Loading" : "Sign Up"
          }
        </Button>
    </form>
    </>
  )
}

export default SingUp
