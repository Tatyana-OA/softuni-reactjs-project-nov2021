import { Link } from "react-router-dom";
import SinglePageHead from "../SinglePageHead";

const ClassDetails = (props) => {
  return (
    <>
      <SinglePageHead
        pageInfo={{ name: "TO DO - Class Name", slug: "to-do-class-slug" }}
      />

      <div className="single">
        <div className="container">
          <div className="row details-row">
            <div className="col-lg-8">
              <div className="single-content wow fadeInUp">
                <img src="img/single.jpg" />
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer molestie, lorem eu eleifend bibendum, augue purus
                  mollis sapien, non rhoncus eros leo in nunc. Donec a nulla vel
                  turpis consectetur tempor ac vel justo. In hac habitasse
                  platea dictumst. Cras nec sollicitudin eros. Nunc eu enim non
                  turpis sagittis rhoncus consectetur id augue. Mauris dignissim
                  neque felis. Phasellus mollis mi a pharetra cursus. Maecenas
                  vulputate augue placerat lacus mattis, nec ornare risus
                  sollicitudin.
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
                      <li><strong>Class Type:</strong> Yoga</li>
                      <li><strong>Group Size:</strong> 12</li>
                      <li><strong>Spots Left:</strong> 5</li>
                      <li><strong>When:</strong> Dec 12, 2021</li>
                      <li><strong>What time:</strong> 10:30 - 11:15</li>
                    </ul>
                  </div>
                </div>

                <div className="sidebar-widget wow fadeInUp">
                  <button className="submit login details">
                    {" "}
                    <Link className="btn">Book Now</Link>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassDetails;
