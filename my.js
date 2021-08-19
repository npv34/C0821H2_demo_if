function getYearOld() {
    let birthday = document.getElementById('birthday').value;
    /*
    - su dung doi tuong Date trong js  de su ly ngay thang
     */
    let date = new Date(birthday);
    let yearBirthday = date.getFullYear();

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    let yearOld = currentYear - yearBirthday;
    if (yearOld >= 0 && yearOld <= 100) {
        if (currentYear === yearBirthday) {
            let monthBirthday = date.getMonth();
            let currentMonth = currentDate.getMonth();
            // so sanh thang
            if (monthBirthday > currentMonth) {
                document.getElementById('result').innerHTML = "Du lieu nam sinh khong chinh xac"
            } else  {
                let birthday = date.getDate();
                let currentDay = currentDate.getDate();
                // so sanh ngay
                if (currentDay >= birthday) {
                    document.getElementById('result').innerHTML = "Ban da 1 tuoi";
                } else {
                    document.getElementById('result').innerHTML = "Du lieu nam sinh khong chinh xac"
                }
            }
        } else {
            document.getElementById('result').innerHTML = "Ban da " + yearOld + " tuoi";
        }
    } else {
        document.getElementById('result').innerHTML = "Du lieu nam sinh khong chinh xac";
    }
}

function getDayOfMonth() {
    let month = +document.getElementById('month').value;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            // code nhieu dong
            alert("co 31 ngay");
            break;
        case 2:
            alert("co 28 hoac 29 ngay");
            break;
        default:
            alert("co 30 ngay");
            break;
    }

   // let message = (role === 1) ? "Toi la Admin" : "Toi khong la admin";

    // if (month === 1 || month === 3 || month === 5
    //     || month === 7 || month === 8 || month ===  10 || month === 12) {
    //     alert("co 31 ngay")
    // } else if (month === 2) {
    //     alert("co 28 hoac 29 ngay");
    // } else {
    //     alert("co 30 ngay")
    // }
}
