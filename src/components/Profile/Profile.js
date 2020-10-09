import React from 'react'
import search from '../../img/search.svg'
import notifications from '../../img/notifications.svg'
import look from '../../img/look.svg'
import girl from '../../img/girl.svg'
import select from '../../img/select.svg'

import './Profile.css'

 const Profile = () => {
    return (
        <div className='profile'>
            <div className='my-profile'>
                 Мой профиль
            </div>
           <div className='profile-icons'>
               <img src={search} alt='поиск' />
               <img src={notifications} alt='уведомления'/>
               <img src={look} alt='смотреть'/> 
               <div className='profile-photo'>
                   <img src={girl} className='profile-icons__girl' alt='девушка'/>
               </div>
               <div className='profile-icons__select'>
                    <img src={select} alt='поиск'/>
               </div>
           </div>
        </div>
    )
}

export default Profile