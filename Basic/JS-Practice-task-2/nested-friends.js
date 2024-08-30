let marks = 82;
let friendMarks= 70;
if(marks > 80){
    if(friendMarks >= 80){
        console.log('Go For Lunch');
    }
    else if(friendMarks < 80 && friendMarks >=60){
        console.log('Good luck next time');
    }
    else if(friendMarks < 60 && friendMarks >=40){
        console.log('Message Unseen');
    }
    else if(friendMarks >= 0 && friendMarks < 40){
        console.log('Block');
    }
    else{
        console.log('Invalid Result');
    }
}
else{
    console.log('Go to home and sleep and act sad');
}