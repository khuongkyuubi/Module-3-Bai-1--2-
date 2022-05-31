const days = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];

let toDay = new Date().getDay();
console.log(`Hôm nay là ${days[toDay]}`)