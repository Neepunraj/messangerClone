import { DetailedHTMLProps, forwardRef,InputHTMLAttributes } from "react";




export const Input =forwardRef<HTMLInputElement, DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement>>(({className,...rest},ref)=>{
    return <input className={`border-grey-400 py-1 px-2 border focus:border-blue-500 outline-none w-full ${className}`} {...rest} ref={ref} />

})
export const Input2 = forwardRef<HTMLInputElement, DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,HTMLInputElement  >>(({className,...rest},ref)=>{
    return <input className={`gap-2 ${className}`} {...rest} ref={ref} />

})

