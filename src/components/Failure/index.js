import Header from '../Header'
import './index.css'

const Failure = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <>
      <Header />
      <div className="failure-view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
          className="failure-img"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>We cannot seem to find the page your are looking for.</p>

        <button type="button" className="retry-button" onClick={onClickRetry}>
          Retry
        </button>
      </div>
    </>
  )
}

export default Failure
