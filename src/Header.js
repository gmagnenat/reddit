import React from 'react'
import './Header.css'
import  SearchIcon  from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='header'>

        <div className='header__left'>
        <img src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?width=640&crop=smart&auto=webp&s=bfd318557bf2a5b3602367c9c4d9cd84d917ccd5" alt="reddit logo"/>

        <div className="header__search">
            < SearchIcon />
            <input type="text" placeholder='Search Reddit'/>
            </div>
        </div>

        <div className="header__right">
            <p>made with ❤️ by</p>
        <a href="https://github.com/aylinhyusmen" target="blank"><img align="center" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="aylinhyusmen" /></a>
        <a href="https://github.com/gmagnenat" target="blank"><img align="center" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="gmagnenat" /></a>
        <a href="https://github.com/BennettHumphrey" target="blank"><img align="center" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="BennettHumphrey" /></a>

        </div>
    </div>
  )
}

export default Header