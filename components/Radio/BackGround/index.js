import { memo } from 'react'

const Background = memo(({ image }) => {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        filter: 'blur(2px)'
      }}
    />
  )
})

export default Background
