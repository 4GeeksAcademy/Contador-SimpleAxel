export const DisplayCount = ({ unidad, decena, centena, unidadM, decenaM, centenaM }) => {
  
  return (
    <div className="justify-content-evenly bg-dark bg-opacity py-5 text-center d-flex fs-1 text-white">
    <div className="col-1 rounded bg-secondary mx-3 px-2 py-5"><i className="fa-solid fa-clock "></i></div>
    <div className="col-1 rounded bg-secondary mx-3 px-2 py-5">{centenaM % 10}</div>
    <div className="col-1 rounded bg-secondary mx-3 px-2 py-5">{decenaM % 10}</div>
    <div className="col-1 rounded bg-secondary mx-3 px-2 py-5">{unidadM % 10}</div>
    <div className="col-1 rounded bg-secondary mx-3 px-2 py-5">{centena % 10}</div>
    <div className="col-1 rounded bg-secondary mx-3 px-2 py-5">{decena % 10}</div>
    <div className="col-1 rounded bg-secondary mx-3 px-2 py-5">{unidad % 10}</div>
    </div>
  );
};
