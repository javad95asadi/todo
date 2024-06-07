import { NavLink } from "react-router-dom";
import { req_things } from "./dashboard_req";
const Dashboard = () => {
    return (
        <>
            <div className=" center_menu ">
                <div className=" d-flex justify-content-center align-items-center col-12">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-4 px-0 px-md-5">
                        <div className="sec_back_color bor_10">
                            <div className="card-body p-4 text-center">
                                <img
                                    className="img-fluid bor_20 col-7 "
                                    src={req_things.calendar}
                                    alt="First slide"
                                ></img>
                                <form
                                    className=" row justify-content-center"
                                    action="/login"
                                    method="post"
                                >
                                    <input type="hidden" name=""></input>

                                    <div className="drll">
                                        <h5 className="font_18 text-uppercase semibold">
                                            Focus on your day
                                        </h5>
                                    </div>
                                    <NavLink
                                        to="/task"
                                        className="btn btn-sm bor_6 font_15 py-2 active_btn border-0 mt-4 text-white col-10 align-items-center d-flex justify-content-center"
                                        type="submit"
                                    >

                                        <p className="mx-1 my-0 d-flex align-items-center">Lets start</p>
                                    </NavLink>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Dashboard;
