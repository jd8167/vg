import c from "./no-visa.module.css";

function NoVisa() {
  return (
    <>
      <div className="col-12">
        <div
          data-ivisa-slug="visa_type_id"
          data-ivisa-question-selector="general.visa_type_id"
          className="wrapper"
        >
          <div>
            <label className={`${c.label}`}>
              <span></span>
            </label>
            <div className={`${c.wrapper2}`}>
              <div className={`${c["m-top"]} bxf`}>
                <div className="loader">
                  <div className={`${c["image-gp"]}`}>
                    <div className={`${c["m-top-40"]} bxb`}>
                      <img
                        className={`${c["margin-auto"]}`}
                        src="https://d3o7lrr6ovj0yv.cloudfront.net/img/warning_papers.png"
                      />
                      <div className={`${c["text-wrapper"]}`}>
                        😥Sorry we can't help you get your visa. To get your
                        visa contact your local embassy.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoVisa;
