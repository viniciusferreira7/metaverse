import Image from 'next/image'
import styles from '../styles'

interface NewFeaturesProps {
  title: string
  subtitle: string
  imgUrl: string
}

function NewFeatures({ title, subtitle, imgUrl }: NewFeaturesProps) {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
      >
        <Image
          src={imgUrl}
          alt="icon"
          className="w-1/2 h-1-2 object-contain"
          width={80}
          height={80}
        />
      </div>

      <h1 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
        Title {title}
      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
        {subtitle}
      </p>
    </div>
  )
}

export default NewFeatures
