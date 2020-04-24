import React from "react";

interface IButtonProps extends React.ComponentProps<'button'> {}

const Button = (props: IButtonProps) => {
return <button {...props}/>;
};

export default Button;
