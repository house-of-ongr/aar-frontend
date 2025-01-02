
type ButtonProps = {
    label: string;
    type: "submit" | "button"
    onClick?: () => void;
    disabled?: boolean
}

export default function Button({ label, type = "button", onClick, disabled }: ButtonProps) {
    return <button disabled={disabled} onClick={onClick} type={type} className='border my-4 px-8 py-3 rounded-lg text-sm bg-slate-900 text-white '>{label}</button>

}