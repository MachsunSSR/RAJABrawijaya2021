import axios from "axios";

export const login = async (nim, password) => {
    const response = await axios.post(
        "https://rajabrawijaya.ub.ac.id/backend/index.php/api/maba/login",
        { nim, password }
    );
    console.log(response.data);
};
