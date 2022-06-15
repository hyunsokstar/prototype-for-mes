import React from 'react'
import { useRouter } from 'next/router'

import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

function WelcomePage() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  console.log('isLoggedIn', isLoggedIn);

  const router = useRouter()


  return (
    <div>
      <button onClick={() => {
        router.push('/mes/login')
      }} >로그인</button>
    </div>
  )
}

export default WelcomePage