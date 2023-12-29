const Shimmer = (props) => {
  const networkAvailability = props.networkAvailable;
  console.log("Network available in shimmer component:" + networkAvailability);
  return (
    
    <div className="shimmer-card-container">
      {/* <div style={{width:"100%"}} display={networkAvailability ? "none" : "block"}><h1>Seems you are offline. Please check your internet connection!!</h1></div> */}
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
    </div>
  );
};

export default Shimmer;
