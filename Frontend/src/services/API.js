import axios from "axios";
import $ from "jquery";
const url = "https://rajabrawijaya.ub.ac.id/api/maba/login";

export const login = async (nim, password) => {
    $.ajax({
        type: "POST",
        url: "https://rajabrawijaya.ub.ac.id/api/maba/login",
        data: {
            nim,
            password,
        },
        success: function (data) {
            console.log(data);
        },
    });
    // const response = await axios.post(
    //     "https://rajabrawijaya.ub.ac.id/api/maba/login",
    //     { nim, password }
    // );
    // console.log(response.data);

    // const response = await fetch(
    //     "https://rajabrawijaya.ub.ac.id/api/maba/login",
    //     {
    //         method: "POST",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ nim, password }),
    //     }
    // );
    // const content = await response.json();
    // console.log(content);
};
