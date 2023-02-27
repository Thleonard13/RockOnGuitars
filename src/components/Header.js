import React from 'react'

const Header = (props) => {

   const { headerText, subHeader, pageClass } = props;

  return (
    <section id="page-header" className={pageClass + "-header"}>
        <h2>{headerText}</h2>
        <p>{subHeader}</p>
    </section>
  )
}

export default Header