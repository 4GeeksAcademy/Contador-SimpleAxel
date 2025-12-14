export const Contador = ({ digit }) => {
  return (
    <div className="col-sm-1 col-lg-1 text-center">
      <div className="card bg-secondary rounded my-3">
        <div className="card-body bg-secondary">
        <h5 className="card-title py-5 px-2 fs-2">{digit}</h5>
        </div>
      </div>
    </div>
  );
};
