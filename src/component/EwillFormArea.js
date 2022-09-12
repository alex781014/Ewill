import { useState } from "react";

function EwillFormArea() {
  const storeNameDataList = ["store1", "store2", "store3"];
  const [storeName, setStoreName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [subMitText, setSubMitText] = useState("submit");
  const [fieldErrors, setFirldErrors] = useState({
    storeName: "",
    fullName: "",
    phoneNumber: "",
    amount: "",
  });
  const checkPhoneNumber = (e) => {
    const onlyNumber = e.target.value.replace(/\D/g, "");
    setPhoneNumber(onlyNumber);
  };
  // 表單用
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubMitText("success");
  };
  // 表單用
  const handleInvalid = (e) => {
    // 不合法驗證泡泡取消
    e.preventDefault();
    setSubMitText("failure");
    setFirldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    });
  };
  // 表單用 更新必填文字
  const handleFormChange = (e) => {
    setFirldErrors({
      ...fieldErrors,
      [e.target.name]: "",
    });
  };

  // const handleChangeFormText = (e) =>{
  //   e.preventDefault();
  //   setSubMitText("success");
  // }

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
                placeholder="僅能輸入store1、store2、store3"
                name="storeName"
                pattern="^(store1|store2|store3)$"
                value={storeName}
                onChange={(e) => {
                  setStoreName(e.target.value);
                }}
                className={
                  fieldErrors.storeName === ""
                    ? "form-mb input-form-style"
                    : "input-form-style"
                }
                required
              />
              <span className="error">{fieldErrors.storeName}</span>
              <datalist id="storeName">
                {storeNameDataList.map((v, i) => (
                  <option key={i} value={v}></option>
                ))}
              </datalist>
              <label className="label-title-style">
                name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="請輸入姓名"
                className={
                  fieldErrors.fullName === ""
                    ? "form-mb input-form-style"
                    : "input-form-style"
                }
                name="fullName"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                required
              />
              <span className="error">{fieldErrors.fullName}</span>

              <label className="label-title-style">
                phone <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                maxLength={10}
                pattern="[09]{2}[0-9]{8}"
                value={phoneNumber}
                onChange={(e) => checkPhoneNumber(e)}
                placeholder="請輸入電話:格式09XXXXXXXX"
                className={
                  fieldErrors.phoneNumber === ""
                    ? "form-mb input-form-style"
                    : "input-form-style"
                }
                name="phoneNumber"
                required
              />
              <span className="error">{fieldErrors.phoneNumber}</span>

              <label className="label-title-style">
                Amount of consumption <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                placeholder="placeholder text"
                className={
                  fieldErrors.amount === ""
                    ? "form-mb input-form-style"
                    : "input-form-style"
                }
                name="amount"
                min={0}
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                required
              />
              <span className="error">{fieldErrors.amount}</span>

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

              <div className="sec-form-btn text-center" id="thisform">
                FORM
              </div>
              <img
                src="images/turtle.svg"
                alt="turtle"
                className="form-turtle"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="form-submit-btn success-type">
                <img
                  className="me-3"
                  src={
                    subMitText === "submit"
                      ? ""
                      : subMitText === "success"
                      ? "images/successtype.svg"
                      : "images/failure.svg"
                  }
                  alt=""
                />
                {subMitText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EwillFormArea;
