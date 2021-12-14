import './Notification.css'

const Notification = ({type, message, closeNotification}) => {
	console.log(type, message)

		return (
      <div className={`alert ${type}`}>
		  <h5 className="notify-title">{type=='error' ? 'Aww, Snap!' : 'Horray!'} </h5>
        <span
          className="closebtn"
          onClick={closeNotification}
        >
          &times;
        </span>
        {message.map(m => <p className='single-msg'>&rarr; {m}</p>)}
      </div>
    );
}

export default Notification;