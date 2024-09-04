import React from "react";

export default function Chart() {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="statistics-details d-flex align-items-center justify-content-between">
                        <div>
                            <p className="statistics-title">Bounce Rate</p>
                            <h3 className="rate-percentage">32.53%</h3>
                            <p className="text-danger d-flex">
                                <i className="mdi mdi-menu-down"></i>
                                <span>-0.5%</span>
                            </p>
                        </div>
                        <div>
                            <p className="statistics-title">Page Views</p>
                            <h3 className="rate-percentage">7,682</h3>
                            <p className="text-success d-flex">
                                <i className="mdi mdi-menu-up"></i>
                                <span>+0.1%</span>
                            </p>
                        </div>
                        <div>
                            <p className="statistics-title">New Sessions</p>
                            <h3 className="rate-percentage">68.8</h3>
                            <p className="text-danger d-flex">
                                <i className="mdi mdi-menu-down"></i>
                                <span>68.8</span>
                            </p>
                        </div>
                        <div className="d-none d-md-block">
                            <p className="statistics-title">Avg. Time on Site</p>
                            <h3 className="rate-percentage">2m:35s</h3>
                            <p className="text-success d-flex">
                                <i className="mdi mdi-menu-down"></i>
                                <span>+0.8%</span>
                            </p>
                        </div>
                        <div className="d-none d-md-block">
                            <p className="statistics-title">New Sessions</p>
                            <h3 className="rate-percentage">68.8</h3>
                            <p className="text-danger d-flex">
                                <i className="mdi mdi-menu-down"></i>
                                <span>68.8</span>
                            </p>
                        </div>
                        <div className="d-none d-md-block">
                            <p className="statistics-title">Avg. Time on Site</p>
                            <h3 className="rate-percentage">2m:35s</h3>
                            <p className="text-success d-flex">
                                <i className="mdi mdi-menu-down"></i>
                                <span>+0.8%</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8 d-flex flex-column">
                    <div className="row flex-grow">
                        <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                                <div className="card-body">
                                    <div className="d-sm-flex justify-content-between align-items-start">
                                        <div>
                                            <h4 className="card-title card-title-dash">
                                                Performance Line Chart
                                            </h4>
                                            <h5 className="card-subtitle card-subtitle-dash">
                                                Lorem Ipsum is simply dummy text
                                                of the printing
                                            </h5>
                                        </div>
                                        <div id="performanceLine-legend"></div>
                                    </div>
                                    <div className="chartjs-wrapper mt-4">
                                        {/* <canvas
                                            id="performanceLine"
                                            width=""
                                        ></canvas> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex flex-column">
                    <div className="row flex-grow">
                        <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                            <div className="card bg-primary card-rounded">
                                <div className="card-body pb-0">
                                    <h4 className="card-title card-title-dash text-white mb-4">
                                        Status Summary
                                    </h4>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="status-summary-ight-white mb-1">
                                                Closed Value
                                            </p>
                                            <h2 className="text-info">357</h2>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="status-summary-chart-wrapper pb-4">
                                                {/* <canvas id="status-summary"></canvas> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-12 grid-margin stretch-card">
                            <div className="card card-rounded">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                                                <div className="circle-progress-width">
                                                    <div
                                                        id="totalVisitors"
                                                        className="progressbar-js-circle pr-2"
                                                    ></div>
                                                </div>
                                                <div>
                                                    <p className="text-small mb-2">
                                                        Total Visitors
                                                    </p>
                                                    <h4 className="mb-0 fw-bold">
                                                        26.80%
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="circle-progress-width">
                                                    <div
                                                        id="visitperday"
                                                        className="progressbar-js-circle pr-2"
                                                    ></div>
                                                </div>
                                                <div>
                                                    <p className="text-small mb-2">
                                                        Visits per day
                                                    </p>
                                                    <h4 className="mb-0 fw-bold">
                                                        9065
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Script src="assets/js/dashboard.js"/>
            <Script src="assets/js/off-canvas.js"/>
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
