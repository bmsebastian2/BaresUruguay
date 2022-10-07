const ContainerModal = ({ children, title, id }) => {
  return (
    <>
      <a href="#" className="modal" id={id} aria-hidden="true"></a>

      <div className="modal-dialog">
        <div className="modal-header">
          <h2>{title}</h2>
          <a href="#" className="btn-close" aria-hidden="true">
            <span>X</span>
          </a>
        </div>

        {children}
      </div>
    </>
  );
};

export default ContainerModal;
