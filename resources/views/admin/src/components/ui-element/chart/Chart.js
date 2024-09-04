import React from "react";
// import Script from 'next/script';

export default function Chart() {
    return (
        <>
            <div className="row">
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Line chart</h4>
                            <canvas id="lineChart"></canvas>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Bar chart</h4>
                            <canvas id="barChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Area chart</h4>
                            <canvas id="areaChart"></canvas>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Doughnut chart</h4>
                            <div className="doughnutjs-wrapper d-flex justify-content-center">
                                <canvas
                                    id="doughnutChart"
                                    style={{height: '250px'}}
                                ></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Pie chart</h4>
                            <div className="doughnutjs-wrapper d-flex justify-content-center">
                                <canvas
                                    id="pieChart"
                                    style={{height: '250px'}}
                                ></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Scatter chart</h4>
                            <canvas id="scatterChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Script src="assets/vendors/js/vendor.bundle.base.js"/>
            <Script src="assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"/>
            <Script src="assets/vendors/chart.js/chart.umd.js"/>
            <Script src="assets/vendors/progressbar.js/progressbar.min.js"/>
            <Script src="assets/js/template.js"/>
            <Script src="assets/js/settings.js"/>
            <Script src="assets/js/hoverable-collapse.js"/>
            <Script src="assets/js/todolist.js"/>
            <Script src="assets/js/jquery.cookie.js"/>
            <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive"/>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive"/> */}
        </>
    );
}
