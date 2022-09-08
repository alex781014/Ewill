import { useState } from "react";

function EwillFormArea() {
  const [storeName, setStoreName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [formText,setFormText] = useState("FORM")
  const [fieldErrors, setFirldErrors] = useState({
    storeName: "",
    fullName: "",
    phone: "",
    amount:"",
  });
  const checkPhoneNumber = (e) => {
    const onlyNumber = e.target.value.replace(/\D/g, "");
    setPhoneNumber(onlyNumber);
  };
  // 表單用
  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(storeName, fullName, phoneNumber, amount);
  }
  // 表單用
  const handleInvalid = (e)=>{
    e.preventDefault();
    setFirldErrors({...fieldErrors,[e.target.name]:''})
  }
  // 表單用
  const handleFormChange = (e)=>{
    setFirldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    });

  }

  return (
    <>
      <div className="row">
        <div className="col-12 form-area">
          <form
            name="form1"
            onSubmit={handleSubmit}
            onInvalid={handleInvalid}
            onChange={handleFormChange}
          >
            <div className="form-content d-flex flex-column">
              <label className="label-title-style">
                store <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                list="storeName"
                placeholder="placeholder text"
                name="storeName"
                value={storeName}
                onChange={(e) => {
                  setStoreName(e.target.value);
                }}
                className="form-select form-mb input-form-style"
                required
              />
              {fieldErrors.storeName}
              <datalist id="storeName">
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
                name="fullName"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                required
              />
              <label className="label-title-style">
                phone <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                maxLength={10}
                value={phoneNumber}
                onChange={(e) => checkPhoneNumber(e)}
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
                name="amount"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                required
              />
              <label className="label-title-style">
                payment <span className="text-danger">*</span>
              </label>
              <select
                className="form-select input-form-style"
                aria-label="Default select example"
                name="payWay"
              >
                <option value="1">digtal payment</option>
                <option value="2">ATM</option>
              </select>

              <div className="sec-form-btn text-center" id="thisform">{formText}</div>
              <img
                src="images/turtle.svg"
                alt="turtle"
                className="form-turtle"
              />
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

export default EwillFormArea;
