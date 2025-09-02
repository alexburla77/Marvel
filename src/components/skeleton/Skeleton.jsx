import './skeleton.scss';

const Skeleton = () => {
  
  return (
    <div className="skeleton">
      <div className="skeleton__title">Please select a character to see information</div>
      <div className="skeleton__animation animation pulse">
        <div className="animation__top">
          <div className="animation__circle"></div>
          <div className="animation__circle-stripe"></div>
        </div>
        <div className="animation__stripe"></div>
        <div className="animation__stripe"></div>
        <div className="animation__stripe"></div>
      </div>
    </div>
  )

}

export default Skeleton;