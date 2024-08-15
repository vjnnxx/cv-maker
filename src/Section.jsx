import { Children } from "react";

export default function Section({children}){

    const childrenList = Children.map(children, child =>
        <div>
            {child}
        </div>
    );

    return (
        <div  style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
            {childrenList}
        </div>
    )
}

