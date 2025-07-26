import React, {ReactNode} from "react";
import './Tag.css'

export const Tag: React.FC<{
    children: ReactNode,
    onClick?: () => void,
    selected?: boolean
}> = ({
          children, onClick, selected = false
      }) => {
    return <span className={"tag" + (onClick ? ' clickable' : '') + (selected ? ' selected' : '')}
                 onClick={onClick}>{children}</span>;
}