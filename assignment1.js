var MobilePrice;
(function (MobilePrice) {
    MobilePrice["gold"] = "699";
    MobilePrice["pink"] = "650";
    MobilePrice["silver"] = "712";
    MobilePrice["price"] = "500";
    MobilePrice["status"] = "Available";
    MobilePrice["discount"] = "15%";
    MobilePrice["gdiscount"] = "10%";
    MobilePrice["pdiscount"] = "20%";
    MobilePrice["sdiscount"] = "5%";
    MobilePrice["pstatus"] = "Unavailable";
})(MobilePrice || (MobilePrice = {}));
;
document.getElementById("gp").innerHTML = "$" + MobilePrice.gold;
document.getElementById("pg").innerHTML = "$" + MobilePrice.pink;
document.getElementById("sp").innerHTML = "$" + MobilePrice.silver;
document.getElementById("mprice").innerHTML = "$" + MobilePrice.price;
document.getElementById("mavailability").innerHTML = "Status" + "" + MobilePrice.status;
document.getElementById("mdiscount").innerHTML = "Discount" + MobilePrice.discount;
function getMobileByColor(color) {
    switch (color) {
        case 'gold':
            document.getElementById("mprice").innerHTML = "$" + MobilePrice.gold;
            document.getElementById("mavailability").innerHTML = "Status" + " " + ":" + MobilePrice.status;
            document.getElementById("mdiscount").innerHTML = "Discount" + " " + ":" + MobilePrice.gdiscount;
            break;
        case 'pink':
            document.getElementById("mprice").innerHTML = "$" + MobilePrice.pink;
            document.getElementById("mavailability").innerHTML = "Status" + " " + ":" + MobilePrice.pstatus;
            document.getElementById("mdiscount").innerHTML = "Discount" + " " + ":" + MobilePrice.pdiscount;
            break;
        case 'silver':
            document.getElementById("mprice").innerHTML = "$" + MobilePrice.silver;
            document.getElementById("mavailability").innerHTML = "Status" + " " + ":" + MobilePrice.status;
            document.getElementById("mdiscount").innerHTML = "Discount" + " " + ":" + MobilePrice.sdiscount;
            break;
    }
}
