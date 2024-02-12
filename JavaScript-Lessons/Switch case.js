let day = "Holiday"

switch(day) {
    case 'Monday': 
    case 'Tuesday':
       console.log("Get up at 11 Am"); 
        break;
    case 'Wednesday': 
    case 'Thursday': 
    case 'Friday':
        console.log("Get up at 9 Am");
        break;
         
    case 'Saturday': 
    case 'Sunday':
         console.log("Get up at 12 Pm");
        break;
    default:
        console.log("Take rest");
       
}
    