export const checkLogin = (cluster) => {
    const d = new Date();
    const date = d.getDate();
    const jam = d.getHours();
    const menit = d.getMinutes();
    if ((date == 17 && jam < 14) || jam >= 21) {
        console.log("sini?");
        return jam == 21 && menit <= 30 ? false : true;
    } else if ((date == 18 && jam < 16) || jam >= 22) {
        return jam == 22 && menit >= 30 ? false : true;
    } else if ((date == 19 && jam < 16) || jam >= 22) {
        return jam == 22 && menit >= 30 ? false : true;
    }

    //tanggal 16
    // if (
    //     (cluster) => 1 && cluster <= 4 && date == 16 && jam >= 18 && jam <= 19
    // ) {
    //     return jam == 19 && menit <= 30 ? true : false;
    // } else if (
    //     (cluster) => 5 && cluster <= 7 && date == 16 && jam >= 19 && jam <= 21
    // ) {
    //     return jam == 19 && menit >= 30 ? true : false;
    // }

    // Tanggal 17
    else if (
        (cluster) => 9 && cluster <= 13 && date == 17 && jam >= 14 && jam <= 15
    ) {
        return jam == 15 && menit >= 30 ? true : false;
    } else if (
        (cluster) => 14 && cluster <= 17 && date == 17 && jam >= 15 && jam <= 17
    ) {
        return jam == 15 && menit >= 30 ? true : false;
    } else if (
        (cluster) => 18 && cluster <= 21 && date == 17 && jam >= 17 && jam <= 18
    ) {
        return jam == 18 && menit >= 30 ? true : false;
    } else if (
        (cluster) => 22 && cluster <= 25 && date == 17 && jam >= 18 && jam <= 20
    ) {
        return jam == 19 && menit >= 30 ? true : false;
    } else if (
        (cluster) => 26 && cluster <= 29 && date == 17 && jam >= 20 && jam <= 21
    ) {
        return jam == 21 && menit <= 30 ? true : false;
    }

    // Tanggal 18
    else if (
        (cluster) => 30 && cluster <= 33 && date == 18 && jam >= 16 && jam <= 18
    ) {
        return jam == 16 && menit >= 30 ? true : false;
    } else if (
        (cluster) => 34 && cluster <= 37 && date == 18 && jam >= 18 && jam <= 19
    ) {
        return jam == 19 && menit <= 30 ? true : false;
    } else if (
        (cluster) => 38 && cluster <= 41 && date == 18 && jam >= 19 && jam <= 21
    ) {
        return jam == 19 && menit >= 30 ? true : false;
    } else if (
        (cluster) => 42 && cluster <= 45 && date == 18 && jam >= 21 && jam <= 22
    ) {
        return jam == 22 && menit <= 30 ? true : false;
    }

    // Tanggal 19
    else if (
        (cluster) => 46 && cluster <= 49 && date == 19 && jam >= 16 && jam <= 18
    ) {
        return jam == 16 && menit >= 30 ? true : false;
    } else if (
        (cluster) => 50 && cluster <= 53 && date == 19 && jam >= 18 && jam <= 19
    ) {
        return jam == 19 && menit <= 30 ? true : false;
    } else if (
        (cluster) => 54 && cluster <= 57 && date == 19 && jam >= 19 && jam <= 21
    ) {
        return jam == 19 && menit >= 30 ? true : false;
    } else if (
        (cluster) => 58 && cluster <= 61 && date == 19 && jam >= 21 && jam <= 22
    ) {
        return jam == 22 && menit <= 30 ? true : false;
    }
};
