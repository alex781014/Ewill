import {useState} from 'react';

function EwillFormArea() {
    const [storeName,setStoreName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState("");
      const checkPhoneNumber = (e) => {
        const onlyNumber = e.target.value.replace(/\D/g, "");
        setPhoneNumber(onlyNumber);
      };
return (
  <>
    <div className="row">
      <div className="col-12 form-area">
        <form className="" name="form1">
          <div className="form-content d-flex flex-column">
            <label className="label-title-style">
              store <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              list="store-id"
              placeholder="placeholder text"
              name="store"
              className="form-select form-mb input-form-style"
              required
            />
            <datalist id="store-id">
              <option value="store1">store1</option>
              <option value="store2">store2</option>
              <option value="store3">store3</option>
            </datalist>
            <label className="label-title-style">
              name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              placeholder="placeholder text"
              className="form-mb input-form-style"
              name="name"
              required
            />
            <label className="label-title-style">
              phone <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              maxLength={10}
              value={phoneNumber}
              onChange={(e)=>checkPhoneNumber(e)}
              placeholder="placeholder text"
              className="form-mb input-form-style"
              name="phone"
              required
            />
            <label className="label-title-style">
              Amount of consumption <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              placeholder="placeholder text"
              className="form-mb input-form-style"
              name="count"
              required
            />
            <label className="label-title-style">
              payment <span className="text-danger">*</span>
            </label>
            <select
              class="form-select input-form-style"
              aria-label="Default select example"
              name="payWay"
            >
              <option value="1">
                digtal payment <span className="text-danger">*</span>
              </option>
              <option value="1">ATM</option>
            </select>

            <div className="sec-form-btn text-center">FORM</div>
            <img src="images/turtle.svg" alt="turtle" className="form-turtle" />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="form-submit-btn ">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
);
}

export default EwillFormArea