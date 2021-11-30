import { Link } from "react-router-dom";
import SinglePageHead from "../SinglePageHead";
import * as classService from '../../services/classService';
import { useState, useEffect } from "react";
import * as userService from '../../services/userService';


const ClassDetails = ({
	location,
	history,
	match
}) => {

const [classDetails, setClassDetails] = useState({})

useEffect(() => {
	//console.log(match.params)
	 async function getClass() {
		const result = await classService.getClassById(match.params.cardId)
		setClassDetails(result)
	 }
	 getClass()
}, [])

console.log('Details for ', classDetails)
let {id, author, acf } = classDetails;
console.log('AUTHOR', author)




    return acf ? (
    <>
      <SinglePageHead
        pageInfo={{ name: acf.name, slug: window.location.href }}
      />

      <div className="single">
        <div className="container">
          <div className="row details-row">
            <div className="col-lg-8">
              <div className="single-content wow fadeInUp">
                <img src={acf.imageUrl}/>
                <h2>{acf.name}</h2>
                <p>
				{acf.description}
                </p>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget wow fadeInUp"></div>

                <div className="sidebar-widget wow fadeInUp">
                  <h2 className="widget-title">Class Details:</h2>
                </div>
                <div className="sidebar-widget wow fadeInUp">
                  <div className="category-widget">
                    <ul>
                      <li><strong>Taught By</strong></li>
                      <div className="single-bio wow fadeInUp">
                        <div className="single-bio-img">
                          <img src="img/user.jpg" />
                        </div>
                        <div className="single-bio-text">
                          <h3>Jessica Smith</h3>
                        </div>
                      </div>
                      <li><strong>Class Type:</strong> {acf.type}</li>
                      <li><strong>Group Size:</strong> {acf.capacity} </li>
                      <li><strong>Spots Left:</strong> 5</li>
                      <li><strong>When:</strong> {acf.date}</li>
                      <li><strong>What time:</strong> {acf.start_time} - {acf.end_time}</li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
					<div className="guest-btns">
					<button className="submit login details">
                    {" "}
                    <Link className="btn">Book Now</Link>{" "}
                  </button>
					</div>
				  <div className="author-btns">
				  <button className="submit login details">
                    {" "}
                    <Link className="btn">Edit</Link>{" "}
                  </button>
				  <button className="submit login details">
                    {" "}
                    <Link className="btn">Delete</Link>{" "}
                  </button>
				  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (<h1>Loading</h1>);
};

export default ClassDetails;
