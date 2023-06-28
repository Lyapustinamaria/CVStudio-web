import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-12">
                        <h1 className="display-4">Computer Vision Studio</h1>
                        <p>
                            Unlocking the Power of Vision: Where Imagination
                            Meets Innovation
                        </p>
                    </div>
                    <div className="col-6 col-sm-12">
                        <div className="d-flex flex-column align-items-center">
                            <div className="rounded-circle border border-dark mb-3">
                                <div
                                    className="rounded-circle overflow-hidden"
                                    style={{ width: '50px', height: '50px' }}
                                >
                                    <img
                                        src="./img/portrait4.jpg"
                                        alt="Photo 1"
                                        className="img-fluid"
                                        style={{
                                            clipPath: 'circle(100% at 50% 50%)',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="rounded-circle border border-dark mb-3">
                                <div
                                    className="rounded-circle overflow-hidden"
                                    style={{ width: '50px', height: '50px' }}
                                >
                                    <img
                                        src="./img/portrait2.jpg"
                                        alt="Photo 2"
                                        className="img-fluid"
                                        style={{
                                            clipPath: 'circle(100% at 50% 50%)',
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="rounded-circle border border-dark">
                                <div
                                    className="rounded-circle overflow-hidden"
                                    style={{ width: '50px', height: '50px' }}
                                >
                                    <img
                                        src="./img/portrait3.jpg"
                                        alt="Photo 3"
                                        className="img-fluid"
                                        style={{
                                            clipPath: 'circle(100% at 50% 50%)',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Main };
