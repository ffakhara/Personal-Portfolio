import notFoundImage from '../assets/404.jpg';



const NotFound = () => {
  return (
    <div className='w-100 d-flex justify-content-center text-danger fs-2'>
      <img src={notFoundImage} alt=""  height={500} width={850}/>
       </div>
         
  )
}

export default NotFound;