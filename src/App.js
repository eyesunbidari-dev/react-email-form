import emailjs from "emailjs-com";

function App() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ad4qwuo",
        "template_yhibya8",
        e.target,
        "Bss7G3q-Z6lMyCOLi"
      )
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="container py-5">
      <div className="row py-5 justify-content-center">
        <div className="col-md-4 bg-white p-5 mt-5">
          <h2 className="pb-5 text-center">ارسال پیام</h2>
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control p-3"
                placeholder="نام شما"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control p-3"
                placeholder="ایمیل شما"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-control p-3"
                placeholder="پیام شما"
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-success w-100 p-2 text-white mt-5"
                value="ارسال"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
