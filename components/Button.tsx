type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;

}

const Button = ({type, title, variant}: ButtonProps) => {
  return (
    <div>
        <button className={`gap-3 rounded-full border transition-all ${variant}`} type={type} >
            <label className="whitespace-nowrap">{title}</label>
        </button>
      
    </div>
  )
}

export default Button
