import { Children } from "react";

function Section({children}){

    const childrenList = Children.map(children, child =>
        <div>
            {child}
        </div>
    );

    return (
        <>
            {childrenList}
        </>
    )
}

export default Section;