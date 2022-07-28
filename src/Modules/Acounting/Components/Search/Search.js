import React from "react";
import '../Search/Search.scss'
import { Button } from "reactstrap";
function Search() {
    return (
        <>
            <div className="cointainer">
                <div className="row">
                    <div class="col-sm-4">
                        <span class="text-success "  >
                            <i className="fa fa-book "></i>
                            Sổ thu
                        </span>
                        <select>
                            <option value='1'>Sổ thu ngân ca sáng</option>
                            <option value='2'>Sổ thu ngân ca chiều</option>
                        </select>
                    </div>
                    <div class="col-sm-4" >
                        <span  class="text-success ">

                            <i class="fa fa-list"></i>

                            Mã bệnh nhân
                        </span>
                        <input placeholder="Nhập mã bệnh nhân"></input>
                        <Button color="success" className="btn">
                            <i className="fa fa-search"></i>
                        </Button>
                    </div>
                    <div class="col-sm-4" >
                        <span class="text-success ">

                            <i class="fa fa-list"></i>

                            Mã hóa đơn
                        </span>
                        <input placeholder="Nhập mã hóa đơn"></input>
                        <Button color="success" className="btn" >
                            <i className="fa fa-search"></i>
                        </Button>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Search