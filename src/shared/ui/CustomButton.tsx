import React from "preact/compat";

interface CustomButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
}
const CustomButton = (props: CustomButtonProps) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2" {...props}>
            {props.children}
        </button>
    );
};

export default CustomButton;