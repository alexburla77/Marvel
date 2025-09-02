import './charForm.scss';


const CharForm = () => {


  return (
    <div className="char-form">
      <form action="#" className="form-char">
        <label htmlFor="name" className='form-char__label'>Or find a character by name:</label>
        <div className="form-char__elements">
          <input type="text" className='form-char__input' id="name" placeholder='Enter name' />
          <button type="submit" className='button form-char__button' >FIND</button>
        </div>
        <div className="form-char__block">
          <div className="form-char__message green">There is! Visit <a href="">name</a> page?</div>
          <button className='button button__little-gray'>FIND</button>
        </div>
      </form>
    </div>
  )
}

export default CharForm;