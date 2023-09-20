import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Loading from "./Loading";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Payment = ({ token, address }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handlePayButtonClicked = useCallback(async () => {
    try {
      setLoading(true);
      const body = {
        dealIds: [3, 4],
        saveCard: true,
        shippingInfo: {
          recipientName: "Pascal",
          phoneNumber: "+235487209897",
          houseNumber: 2,
          street: "jhbhjbnsk",
          state: "bjhsghi",
          city: "hjbdhb",
          postalCode: 627897,
          country: "Ukraine",
        },
      };

      const res = await axios.post(
        "https://kinkiverse.onrender.com/flutterwave/initialize",
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { paymentUrl } = res.data.data;

      setData(paymentUrl);
      console.log(paymentUrl);
      window.location.href = paymentUrl;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <h1>redirecting...</h1>;
  }

  return (
    <div>
      <button
        id="karim"
        className="btn btn-danger"
        onClick={handlePayButtonClicked}
      >
        Buy Now
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    address: state.address.address,
  };
};

export default connect(mapStateToProps, null)(Payment);
