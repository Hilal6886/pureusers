import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Booking from '../Booking/Booking';
import { useNavigate } from 'react-router-dom';
import { fetchProducts,getFeaturedProducts } from '../../services/ProductService';

const TourDetails = () => {
  const [featuredproduct, setProduct] = useState(null);
  const [otherFeaturedProducts, setOtherFeaturedProducts] = useState([]);
  const { id: featuredProductId } = useParams();
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const productArray = await fetchProducts(featuredProductId);
        if (productArray.length > 0) {
          setProduct(productArray[0]);
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    const fetchOtherFeaturedProducts = async () => {
      try {
        const otherProducts = await getFeaturedProducts(featuredProductId);
        setOtherFeaturedProducts(otherProducts);
      } catch (error) {
        console.error('Error fetching other featured products:', error);
      }
    };

    fetchData();
    fetchOtherFeaturedProducts();
  }, [featuredProductId]);
  

  const handleToast = (message, type) => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    }
  };

  if (!featuredproduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section>
        <div className='sal'>
          <Row>
            <div className="hji">
              <div className="seIntro4">
                <h2 className="secTtle4 gradient__text ">{featuredproduct.title} <br />Users</h2>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
              </div>
            </div>
            <Col lg="6">
              <div className="card">
                <div className="card-number">{featuredproduct.companyuser}</div>
                <p className="card-text">COMPANIES THAT USE {featuredproduct.title}</p>
              </div>
            </Col>
            <Col lg="4">
              <div className='bo9'>
                <Booking product={featuredproduct} handleToast={handleToast} />
              </div>
            </Col>
          </Row>
          <Row>
          <Col lg="4">

<div className=" car">
  <div className='border'>
    <div className="card-numb">
      <div className='goos'>
        <i class="ri-profile-line"></i>
        <ul> First Name</ul>
      </div>
      <div className='goos'>
        <i class="ri-profile-fill"></i>
        <ul> Last Name</ul>
      </div>
      <div className='goos'>
        <i class="ri-community-line"></i>
        <ul> Company</ul>
      </div>
      <div className='goos'>
        <i class="ri-briefcase-line"></i>
        <ul> Job Title </ul>
      </div>
      <div className='goos'>
        <i class="ri-money-dollar-box-line"></i>
        <ul> Revenue</ul>
      </div>
      <div className='goos'>
        <i class="ri-pages-line"></i>
        <ul> Website</ul>
      </div>
      <div className='goos'>
        <i class="ri-building-4-line"></i>
        <ul> City</ul>
      </div>
      <div className='goos'>
        <i class="ri-group-line"></i>
        <ul> Staff</ul>
      </div>


    </div>

    <div className="card-num">
      <div className='goos'>
        <i class="ri-mail-line"></i>
        <ul> Email</ul>
      </div>
      <div className='goos'>
        <i class="ri-phone-line"></i>
        <ul> Phone No</ul>
      </div>
      <div className='goos'>
        <i class="ri-linkedin-box-fill"></i>
        <ul> LinkedIn</ul>
      </div>
      <div className='goos'>
        <i class="ri-map-pin-user-fill"></i>
        <ul> Mailling Address</ul>
      </div>
      <div className='goos'>
        <i class="ri-bar-chart-2-line"></i>
        <ul> Growth</ul>
      </div>
      <div className='goos'>
        <i class="ri-building-line"></i>
        <ul> Industry</ul>
      </div>
      <div className='goos'>
        <i class="ri-facebook-circle-fill"></i>
        <ul> Social Media</ul>
      </div>
      <div className='goos'>
        <i class="ri-git-branch-line"></i>
        <ul> Decision Makers</ul>
      </div>
    </div>

  </div>

</div>



</Col>
<Col lg="8">
  <div className='b9'>
    <p> There are numerous benefits to use  Pure Users's <span>{featuredproduct.title} </span> users list.
      The data not only enhances your advertising endeavors but is also highly accessible and permission- <br />based.</p>
    <p>To guarantee total timeliness, our data is additionally thoroughly validated by humans and carefully
      authenticated.
      Customers from a variety of industrial backgrounds
      can use our <span>{featuredproduct.title} </span> users list to their advantage in the following ways.
       
    Using this <span>{featuredproduct.title} </span> users
      list will be advantageous for software vendors.
      This is the most effective way to reach out to different <span>{featuredproduct.title} </span> Users worldwide and pitch
      your services. 
    Professionals and industries who use <span>{featuredproduct.title} </span> are easily reachable
      by marketers and digital marketers.</p>



 
    <p>Regular software companies can advertise their goods and services to 
      decision-makers and executives in the industry who are already <span>{featuredproduct.title} </span> users.</p>

  </div>
</Col>
          </Row>
          <Row>
          <Col lg='12'>
            <div className='rt'>
              <p> 100% Technology Guarantee</p>
              <p> 98% Deliverability Guarantee</p>
              <p> 100% Company Details Guarantee</p>
            </div>
          </Col>
        </Row>


        </div>
      </section>
      
      <section className="sal user ">
        <h2 className="titleone  gradient__text"> Companies Currently Using {featuredproduct.title} </h2>
        <div className="table-con">
          <div className="desktop">
            <table className="responsive">
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>Website</th>
                  <th>Country</th>
                  <th>Industry</th>

                </tr>
              </thead>
              <tbody>
                {featuredproduct.users.map((user, index) => (
                  <tr key={index}>
                    <td data-label="Company Name">{user.companyName}</td>
                    <td data-label="Website">{user.companyWebsite}</td>
                    <td data-label="Country">{user.country}</td>
                    <td data-label="Industry">{user.revenue}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <Row>
          <Col lg='12'>
            <div className='thed'>
              <p> Current data: To guarantee optimum relevancy, we constantly update and maintain a well-structured database.</p>
              <p> Prefabricated data: You receive ready-to-download data that has been
                packaged and customized in advance. </p>
              <p> Highest response rate: Up to 95% delivery rate with very few hard bounces is possible with Pure Users.</p>
              <p> Legal compliance: To guarantee total adherence to the law, all of our data originates from opt-in mailing
                lists and other sources. Our data is completely GDPR and CAN-SPAM compliant.
              </p>
              <p> With the most comprehensive  <span>{featuredproduct.title} </span>  Users List available, Pure Users can assist you in growing your
                company. We assume full responsibility for the database's correctness of information. You can only
                anticipate accurate contact details and enhanced prospects for expanding your clientele while working with
                us.</p>

            </div>
          </Col>
        </Row>
      </section>
      <section>
        <div className='salr'>
          <Row>
            <div className="h">
              <div className="seIntro">


              </div>
            </div>
            <Col lg="6">

              <div className="contact-table">
                <h4 className=" gradient__text ">{featuredproduct.title} Users Mailing List Consists</h4>
                <div className="contact-row">
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Contact Name
                  </div>
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Country
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Title
                  </div>
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Phone Number
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Email Address
                  </div>
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Fax Number
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Company Name
                  </div>
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> SIC Code
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Website
                  </div>
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> NAICs Code
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Address Line
                  </div>
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Industry
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> City
                  </div>
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Employee Size
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> State
                  </div>
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Revenue Size
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-cell ">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Postal Code
                  </div>
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> Technlogy Traking
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> More Area
                  </div>
                  <div className="contact-cell">
                    <i className="ri-arrow-right-circle-fill icon green"></i> LinkedIn Profile
                  </div>
                </div>
              </div>


            </Col>
            <Col lg="4">
              <div className='bo9'>
              <Booking product={featuredproduct} handleToast={handleToast} />
              </div>
            </Col>
          </Row>
        </div>

      </section>
      
      {otherFeaturedProducts.length > 0 && (
        <section className="salr related-products-section">
          <h2 className='gradient__text'>Other Technology Users Email List Includes</h2>
          <div className="related-products-table contact-table">
            <div className="contact-row">
              <div className="contact-cell title">Product</div>
              <div className="contact-cell title">Users</div>
            </div>
            {otherFeaturedProducts.map((otherProduct) => (
              <div className="contact-row" key={otherProduct.id}>
                <div className="contact-cell">
                  <a
                    href={`/product/${otherProduct.id}`}
                    className="related-product-link"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Navigating to /product/${otherProduct.id}`);
                      navigate(`/product/${otherProduct.id}`);
                      scrollToTop();
                    }}
                  >
                    {otherProduct.title}
                  </a>
                </div>
                <div className="contact-cell">{otherProduct.companyuser}</div>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Additional sections and JSX go here */}
    </>
  );
};

export default TourDetails;
