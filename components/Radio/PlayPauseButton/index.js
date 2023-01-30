import Image from 'next/image'
import { useState } from 'react'
import playButtonImage from '../../../public/play_button/play.svg'
import pauseButtonImage from '../../../public/play_button/Play_pause.svg'

export default function PlayPauseButton({ referencia, props }) {
  const [Ativo, setAtivo] = useState(false)
  const [buttonImage, setButtonImage] = useState(playButtonImage)

  function toggleAtivo() {
    setAtivo(!Ativo)
    if (Ativo) {
      setButtonImage(playButtonImage)
      referencia.current.muted = true;
    } else {
      setButtonImage(pauseButtonImage)
      referencia.current.play()
      referencia.current.muted = false;
    }
  }

  return (
    <Image onClick={() => { toggleAtivo() }} className="play__button" alt="play__button" src={buttonImage} />
  )
}