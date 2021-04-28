import {FC} from "react";
import {NavLink,NavLinkProps} from "react-router-dom";
import styles from './index.module.scss';

export interface ARNavLinkProps extends NavLinkProps{

}

const ARNavLink:FC<ARNavLinkProps> = ({...props})=>{

  return (
    <NavLink {...props} className={styles.index}/>
  )
}
export default ARNavLink;