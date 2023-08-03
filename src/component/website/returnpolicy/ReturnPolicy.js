import React , {useEffect}from "react";
import images  from '../../common/Images'

const ReturnPolicy = ({content}) => {
  useEffect(() => {
    document.title = "Return Policy | SoftStorm - Custom Software Development Service Provider Company in Surat, India";
  }, []);

  return (
    <>
      <section className={`softstormweb-privacy pt-70 pb-80 `} id="service" style={{backgroundImage: "none"}}>
        {/* <div className="container">
          <div className="handlediv">
            <img src={images.bulletIcon} alt="symbol" className="handlecarrericon " />
            <p className="pb-4 pl-2">All transactions that are done through SoftStorm. are final with no repayment or exchange permitted. You are responsible for the payment of and all charges that result from these payments. SoftStorm shall not be responsible for any payment for an incorrect account number. In case, money has been charged to your card or bank account or pre-paid payment instrument and a payment/service is not produced by the service provider within a day (24 hours) of your completion of the transaction then you may notify us regarding the same by sending an email to account@softstorm.in. Please incorporate the following details: </p>
          </div>
          <div className="handlediv">
            <img src={images.bulletIcon} alt="symbol" className="handlecarrericon " />
            <p className="pb-4 pl-2"> Bank Account Number</p>
          </div>
          <div className="handlediv">
            <img src={images.bulletIcon} alt="symbol" className="handlecarrericon " />
            <p className="pb-4 pl-2"> Bank Name</p>
          </div>
          <div className="handlediv">
            <img src={images.bulletIcon} alt="symbol" className="handlecarrericon " />
            <p className="pb-4 pl-2"> Payment value</p>
          </div>
          <div className="handlediv">
            <img src={images.bulletIcon} alt="symbol" className="handlecarrericon " />
            <p className="pb-4 pl-2"> Transaction date</p>
          </div>
          <div className="handlediv">
            <img src={images.bulletIcon} alt="symbol" className="handlecarrericon " />
            <p className="pb-4 pl-2"> Order number</p>
          </div>
          <div className="handlediv">
            <img src={images.bulletIcon} alt="symbol" className="handlecarrericon " />
            <p className="pb-4 pl-2"> Transaction Number</p>
          </div>
          <div className="handlediv">
            <img src={images.bulletIcon} alt="symbol" className="handlecarrericon " />
            <p className="pb-4 pl-2">SoftStorm shall examine such events and if it is found that money was actually charged to your card or bank account or pre-paid payment instrument without delivery of the payment/service then you will be refunded the money within 15 working days from the date of receipt of your email. All refunds will be credited to your card or bank account. We shall have the sole discretion to define the mode of reversal from the above mentioned options.</p>
          </div>
        </div> */}
        {content && <div dangerouslySetInnerHTML={{__html: content}} />}
        <div className="sponser-shape">
          <img src={images.sponserShape} alt="" />
        </div>
      </section>
    </>
  );
};

export default ReturnPolicy;
