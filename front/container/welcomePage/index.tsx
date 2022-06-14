import React from 'react'
import { useRouter } from 'next/router'



function WelcomePage() {

  const router = useRouter()


  return (
    <div>
      <button onClick={() => {
        router.push('/mes/dashboard')
      }} >로그인</button>
    </div>
  )
}

export default WelcomePage