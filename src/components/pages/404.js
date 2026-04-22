import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router";

const Page404 = () => {
  return (
    <div>
      <Link to='/' style={{ textAlign: 'right', display: 'block', marginRight: '10px', color: '#9F0013', 'fontWeight': 'bold', 'fontSize': '18px' }}>
        Back to main page
      </Link>
      <ErrorMessage/>
      <p style={{ 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px' }}>Page doesn't exist</p>
    </div>
  )
}

export default Page404;