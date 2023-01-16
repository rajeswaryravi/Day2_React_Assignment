enum MobilePrice { gold = "699", pink = "650", silver = "712", price = "500", status = "Available", discount = "15%", gdiscount = "10%", pdiscount = "20%", sdiscount = "5%", pstatus = "Unavailable" };

document.getElementById("gp").innerHTML = "$" + MobilePrice.gold;
document.getElementById("pg").innerHTML = "$" + MobilePrice.pink;
document.getElementById("sp").innerHTML = "$" + MobilePrice.silver;
document.getElementById("mprice").innerHTML = "$" + MobilePrice.price;
document.getElementById("mavailability").innerHTML = "Status" + "" + MobilePrice.status;
document.getElementById("mdiscount").innerHTML = "Discount" + MobilePrice.discount;
function getMobileByColor(color: string) {
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