function calculateNumberOfDays(deadline) {
    var splitDeadline = deadline.split(".");
    var deadlineDate = new Date(splitDeadline[2], splitDeadline[1] - 1, splitDeadline[0]);
    var todayDate = new Date();
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var diffDays = Math.round(Math.abs((deadlineDate.getTime() - todayDate.getTime())/(oneDay)));
    document.write(diffDays);
}