import React from 'react';

const Contact = () => {
    return (
        <div>
              <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="contact-form">
                            <h3 className="form-title">Форма заявки</h3>
                            <form action="">
                                <div class="mb-3">
                                    <label for="ПІБ" class="form-label text-light">ПІБ</label>
                                    <input type="email" class="form-control input-f" id="ПІБ" aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-3">
                                    <label for="Телефон" class="form-label text-light">Телефон</label>
                                    <input type="password" class="form-control input-f" id="Телефон"/>
                                </div>
                                <div className="text-center pt-3">
                                <button type="submit" class="btn btn-light box-btn">Замовити</button>
                                </div>
                            </form>
                        </div>                        
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;