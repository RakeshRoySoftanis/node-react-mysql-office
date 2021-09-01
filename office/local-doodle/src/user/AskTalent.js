function AskTalent() {
  return (
    
    <div className="askTalent">
        <h2 className="askTalent_title">Ask for a Talent</h2>
        <p className="askTalent_tagLine">
        Our talent pool isn't enough to meet your demand! We can still hire
        <br /> for you. let us know your requirement.
        </p>
        <form className>
        <div className="row">
            <div className="col-md-12 form-title"></div>
            <div className="col-md-4">
            <div className="form-group">
                <label>Department*</label>
                    <select className="form-control">
                        <option>Select Departments 654</option>
                        <option>Select Departments 5a6</option>
                        <option>Select Departments asdf465</option>
                        <option>Select Departmentsa sdf</option>
                    </select>
            </div>
            <div className="form-group">
                <label>Designation*</label>
                    <select className="form-control">
                        <option>Select Departments 654</option>
                        <option>Select Departments 5a6</option>
                        <option>Select Departments asdf465</option>
                        <option>Select Departmentsa sdf</option>
                    </select>
            </div>
            <div className="form-group">
                <label>Required experience</label>
                <input
                type="text"
                placeholder="Lorem Impus"
                className="form-control"
                />
            </div>
            </div>
            <div className="col-md-4">
            <div className="form-group">
                <label>Number of talents*</label>
                    <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
            </div>
            <div className="form-group">
                <label>Required Skills*</label>
                <textarea
                className="form-control"
                placeholder="Departments"
                defaultValue={""}
                />
            </div>
            </div>
            <div className="col-md-4">
            <div className="form-group">
                <label>Required certification</label>
                <input
                type="text"
                placeholder="Lorem Impus"
                className="form-control"
                />
            </div>
            <div className="form-group">
                <label>Note</label>
                <textarea
                className="form-control"
                placeholder="Message"
                defaultValue={""}
                />
            </div>
            </div>
            <div className="col-md-12 text-right">
            <button type="button" className="btn btn-submit">
                Submit
            </button>
            </div>
        </div>
        </form>
    </div>
            

  );
}

export default AskTalent;